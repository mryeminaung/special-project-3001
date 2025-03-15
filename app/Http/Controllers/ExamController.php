<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\ExamPeriod;
use App\Models\ExamSchedule;
use App\Models\Room;
use App\Models\RoomType;
use App\Models\RoomUsage;
use App\Models\Semester;
use App\Services\DutyAllocator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ExamController extends Controller
{
    public function index()
    {
        $exams = ExamSchedule::whereIn('semester_id', [1, 3, 5, 7])
            ->get()
            ->groupBy('semester_id');
        return Inertia::render('Timetable/Index', [
            'exams' => $exams,
        ]);
    }

    public function create()
    {
        $courses = Course::where('semester_id', request('semester_id'))
            ->where('course_type_id', 1)
            ->with(['program', 'courseType'])
            ->get();
        $examPeriods = ExamPeriod::all();
        $semesters = Semester::wherein('id', [1, 3, 5, 7])->get();

        return Inertia::render('Timetable/NewTimetable', [
            'semesters' => $semesters,
            'courses' => $courses,
            'examPeriods' => $examPeriods,
        ]);
    }

    public function store()
    {
        $exams = request()->all();

        // Get room types
        $roomTypeA = RoomType::where('type', 'Type A')->first();
        $roomTypeB = RoomType::where('type', 'Type B')->first();

        foreach ($exams as $exam) {
            $numberOfStudents = $exam['no_students'];
            $examDate = $exam['exam_date'];
            $examTimeId = $exam['exam_time_id'];

            // Get rooms already in use for this time slot
            $usedRooms = RoomUsage::where('date', $examDate)
                ->where('exam_time_id', $examTimeId)
                ->pluck('room_id')
                ->toArray();

            // Calculate required rooms
            $RA = intdiv($numberOfStudents, 60);
            $remainder = $numberOfStudents % 60;
            $RB = ceil($remainder / 30);

            // Allocate Type A rooms
            $typeARooms = Room::where('room_type_id', $roomTypeA->id)
                ->whereNotIn('id', $usedRooms)
                ->limit($RA)
                ->get();

            // Calculate missing Type A capacity
            $allocatedTypeA = $typeARooms->count();
            $missingTypeA = $RA - $allocatedTypeA;

            // Convert missing Type A to Type B (1 Type A = 2 Type B)
            if ($missingTypeA > 0) {
                $RB += $missingTypeA * 2;
            }

            // Allocate Type B rooms
            $typeBRooms = Room::where('room_type_id', $roomTypeB->id)
                ->whereNotIn('id', $usedRooms)
                ->limit($RB)
                ->get();

            // Combine allocations
            $allocatedRooms = $typeARooms->merge($typeBRooms);

            // Validate allocation
            if ($allocatedRooms->count() < ($allocatedTypeA + $RB)) {
                $timeSlot = ExamPeriod::find($examTimeId)->type;
                return Redirect::back()->withErrors([
                    'error' => "Not enough rooms available for {$exam['course_code']} on {$examDate} ({$timeSlot})"
                ]);
            }

            // Create exam schedules
            foreach ($allocatedRooms as $room) {
                $schedule = ExamSchedule::create([
                    'semester_id' => $exam['semester_id'],
                    'course_id' => $exam['course_id'],
                    'exam_date' => $examDate,
                    'exam_time_id' => $examTimeId,
                    'room_id' => $room->id,
                    'program_id' => $exam['program_id'],
                    'no_students' => $numberOfStudents
                ]);

                // Mark room as used with time slot
                RoomUsage::create([
                    'date' => $examDate,
                    'exam_time_id' => $examTimeId,
                    'room_id' => $room->id,
                    'exam_schedule_id' => $schedule->id
                ]);

                // Duty Allocation Here
                $allocator = new DutyAllocator(
                    $examDate,
                    ExamPeriod::find($examTimeId)->type
                );
                $allocator->allocateForExam($schedule);
            }
        }

        return redirect()->route('timetables.index')->with('success', 'Timetable created successfully!');
    }

    public function show($semId)
    {
        $examSchedules = ExamSchedule::where('semester_id', $semId)
            ->with(['room', 'course.program', 'examDuties.faculty', 'examDuties.role'])
            ->get();

        $semester = Semester::findOrFail($semId);

        $groupedExams = $examSchedules->groupBy(function ($exam) {
            return $exam->course->course_code . '-' . $exam->exam_date . '-' . $exam->exam_time_id;
        });

        $mergedData = $groupedExams->map(function ($group) {
            $firstExam = $group->first();

            return [
                'id' => $firstExam->id,
                'course_code' => $firstExam->course->course_code,
                'title' => $firstExam->course->title,
                'exam_date' => $firstExam->exam_date,
                'exam_time_id' => $firstExam->exam_time_id,
                'exam_duties' => $group->flatMap(function ($exam) {
                    return $exam->examDuties->map(fn($duty) => [
                        ...$duty->toArray(),
                        'room_number' => $exam->room->name
                    ]);
                }),
                'program' => $firstExam->course->program,
                'rooms' => $group->pluck('room.name')->all(), // Array of room numbers
                'no_students' => $firstExam->no_students,
            ];
        })->values();

        return Inertia::render('Timetable/Partials/ExamTimetable', [
            'exams' => $mergedData,
            'semester' => $semester,
        ]);
    }
}
