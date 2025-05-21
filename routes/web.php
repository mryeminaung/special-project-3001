
<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DutyListController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

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

    Route::get('/dutylist/export-to-excel', [DutyListController::class, 'exportExcel'])->name('dutylist.export-excel');
    Route::resource('dutylist', DutyListController::class);

    Route::get('timetables/{semesterId}/export-to-excel', [Examcontroller::class, 'exportExcel'])->name('timetables.export-excel');
});

require __DIR__ . '/exam.php';
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
