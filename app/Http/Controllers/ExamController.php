<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\ExamPeriod;
use App\Models\ExamSchedule;
use App\Models\Semester;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        foreach (request()->all() as $exam) {
            $exam["room_id"] = fake()->numberBetween(1, 11);
            // Log::info($exam);
            ExamSchedule::create($exam);
        }

        return redirect()->route('timetables.index');
    }

    public function show($semId)
    {
        $examSchedules = ExamSchedule::where('semester_id', $semId)->get();
        $courses = Course::where('semester_id', $semId)->with(['program'])->get();
        $semester = Semester::where('id', $semId)->first();

        $mergedData = $examSchedules->map(function ($exam) use ($courses) {
            $course = $courses->firstWhere('id', $exam->course_id);
            return [
                ...$exam->toArray(), // Spread exam attributes
                ...$course->toArray(), // Spread course attributes
            ];
        });

        return Inertia::render('Timetable/Partials/ExamTimetable', [
            'exams' => $mergedData,
            'semester' => $semester,
        ]);
    }
}
