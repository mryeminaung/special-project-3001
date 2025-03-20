<?php

namespace App\Services;

use App\Models\{ExamSchedule, Faculty, Role, ExamDuty, Course};
use Illuminate\Support\Facades\Log;

class DutyAllocator
{
    protected $date;
    protected $session;
    protected $maxRetries = 3;

    public function __construct($date, $session)
    {
        $this->date = $date;
        $this->session = $session;
    }

    public function allocateForExam(ExamSchedule $examSchedule)
    {
        $course = $examSchedule->course;
        $roomType = $examSchedule->room->room_type_id;

        $this->allocateInvigilators($examSchedule, $course);
        $this->allocateCoInvigilators($examSchedule, $course, $roomType);
    }

    private function allocateInvigilators(ExamSchedule $exam, Course $course)
    {
        $required = 1;
        $role = Role::firstWhere('name', 'Invigilator');

        $query = $this->baseFacultyQuery($course)
            ->whereHas('rank', fn($q) => $q->whereIn('title', ['Associate Professor']))
            ->orderBy('current_duties')
            ->orderByRaw('RAND()');

        $this->assignDutiesWithFallback($exam, $query, $role, $required);
    }

    private function allocateCoInvigilators(ExamSchedule $exam, Course $course, $roomType)
    {
        $required = $roomType === 1 ? 5 : 2;
        $role = Role::firstWhere('name', 'Co-Invigilator');

        $query = $this->baseFacultyQuery($course)
            ->whereHas('rank', fn($q) => $q->whereIn('title', ['Lecturer', 'Assistant Lecturer']))
            ->orderBy('current_duties')
            ->orderByRaw('RAND()');

        $this->assignDutiesWithFallback($exam, $query, $role, $required);
    }

    private function assignDutiesWithFallback($exam, $query, $role, $required, $attempt = 1)
    {
        $available = $query->take($required * 2)->get()->shuffle();

        if ($available->count() >= $required) {
            $this->createDuties($exam, $available->take($required), $role);
            return;
        }

        if ($attempt <= $this->maxRetries) {
            // Relax constraints using raw expression with proper table prefix
            $fallbackQuery = Faculty::whereRaw('faculties.current_duties < (faculties.max_duties + 2)')
                ->orderBy('current_duties')
                ->orderByRaw('RAND()');

            $this->assignDutiesWithFallback($exam, $fallbackQuery, $role, $required, $attempt + 1);
        } else {
            Log::warning("Allocation failed after {$this->maxRetries} attempts for exam {$exam->id}");
        }
    }

    private function baseFacultyQuery(Course $course)
    {
        return Faculty::where('id', '!=', $course->faculty_id)
            ->whereColumn('current_duties', '<', 'max_duties')
            ->whereDoesntHave('examDuties', function ($q) {
                $q->where('date', $this->date)
                    ->where('session', $this->session);
            })
            ->when($this->session === 'PM', function ($q) {
                $q->whereDoesntHave('examDuties', function ($q) {
                    $q->where('date', $this->date)
                        ->where('session', 'AM');
                });
            });
    }

    private function createDuties($exam, $faculty, $role)
    {
        foreach ($faculty as $member) {
            ExamDuty::firstOrCreate([
                'exam_schedule_id' => $exam->id,
                'faculty_id' => $member->id,
                'date' => $this->date,
                'session' => $this->session
            ], [
                'role_id' => $role->id
            ]);

            $member->increment('current_duties');
        }
    }
}
