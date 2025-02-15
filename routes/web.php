
<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\StudentController;
use App\Models\Course;
use App\Models\ExamPeriod;
use App\Models\ExamSchedule;
use App\Models\Faculty;
use App\Models\Semester;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {

    Route::get('/rooms/export-to-excel', [RoomController::class, 'exportExcel'])->name('rooms.export-excel');
    Route::resource('rooms', RoomController::class);

    Route::get('/departments/export-to-excel', [DepartmentController::class, 'exportExcel'])->name('departments.export-excel');
    Route::resource('departments', DepartmentController::class);

    Route::get('/faculties/export-to-excel', [FacultyController::class, 'exportExcel'])->name('faculties.export-excel');
    Route::resource('faculties', FacultyController::class);

    Route::get('/courses/export-to-excel', [CourseController::class, 'exportExcel'])->name('courses.export-excel');
    Route::resource('courses', CourseController::class);

    Route::get('/students/export-to-excel', [StudentController::class, 'exportExcel'])->name('students.export-excel');
    Route::resource('students', StudentController::class);

    Route::get('timetables', function () {
        $exams = ExamSchedule::whereIn('semester_id', [1, 3, 5, 7])
            ->get()
            ->groupBy('semester_id');
        return Inertia::render('Timetable/Index', [
            'exams' => $exams,
        ]);
    })->name('timetables.index');

    Route::get('timetables/{semId}', function ($semId) {
        $examSchedules = ExamSchedule::where('semester_id', $semId)->get();

        $courses = Course::where('semester_id', $semId)->get();
        $mergedData = $examSchedules->map(function ($exam) use ($courses) {
            $course = $courses->firstWhere('id', $exam->course_id);
            return [
                ...$exam->toArray(), // Spread exam attributes
                ...$course->toArray(), // Spread course attributes
            ];
        });

        return Inertia::render('Timetable/Partials/ExamTimetable', [
            'exams' => $mergedData,
        ]);
    })->name('timetables.show');

    Route::get('new-timetable', function () {
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
    })->name('timetables.add');

    Route::post('new-timetable', function () {
        foreach (request()->all() as $exam) {
            $exam["room_id"] = fake()->numberBetween(1, 11);
            // Log::info($exam);
            ExamSchedule::create($exam);
        }

        return redirect()->route('timetables.index');
    })->name('timetables.store');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
