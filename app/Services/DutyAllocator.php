<?php

namespace App\Services;

use App\Models\{ExamSchedule, Faculty, Role, ExamDuty, Course};

class DutyAllocator
{
    protected $date;
    protected $session;

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

        $query = Faculty::whereHas('rank', fn($q) => $q->whereIn('title', ['Professor', 'Associate Professor']))
            ->where('id', '!=', $course->faculty_id) // Exclude course instructor
            ->whereColumn('current_duties', '<', 'max_duties')
            ->whereDoesntHave('examDuties', fn($q) => $q->where([
                ['date', $this->date],
                ['session', $this->session]
            ]));

        if ($this->session === 'PM') {
            $query->whereDoesntHave('examDuties', fn($q) => $q->where([
                ['date', $this->date],
                ['session', 'AM']
            ]));
        }

        $faculty = $query->take($required)->get();
        $this->createDuties($exam, $faculty, $role);
    }

    private function allocateCoInvigilators(ExamSchedule $exam, Course $course, $roomType)
    {
        $required = $roomType === 1 ? 5 : 2; // Assuming 1=Type A, 2=Type B
        $role = Role::firstWhere('name', 'Co-Invigilator');

        $query = Faculty::whereHas('rank', fn($q) => $q->whereIn('title', ['Lecturer', 'Assistant Lecturer']))
            ->where('id', '!=', $course->faculty_id) // Exclude course instructor
            ->whereColumn('current_duties', '<', 'max_duties')
            ->whereDoesntHave('examDuties', fn($q) => $q->where([
                ['date', $this->date],
                ['session', $this->session]
            ]));

        if ($this->session === 'PM') {
            $query->whereDoesntHave('examDuties', fn($q) => $q->where([
                ['date', $this->date],
                ['session', 'AM']
            ]));
        }

        $faculty = $query->take($required)->get();
        $this->createDuties($exam, $faculty, $role);
    }

    private function createDuties($exam, $faculty, $role)
    {
        foreach ($faculty as $member) {
            ExamDuty::create([
                'exam_schedule_id' => $exam->id,
                'faculty_id' => $member->id,
                'role_id' => $role->id,
                'date' => $this->date,
                'session' => $this->session
            ]);

            $member->increment('current_duties');
        }
    }
}
