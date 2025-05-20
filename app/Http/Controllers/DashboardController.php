<?php
namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\ExamSchedule;
use App\Models\Faculty;
use App\Models\Student;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $faculties = Faculty::paginate(6);
        $exams     = ExamSchedule::whereIn('semester_id', [1, 3, 5, 7])
            ->get()
            ->groupBy('semester_id');
        $semesterIds = $exams->keys()->toArray();
        $courseInfo  = Course::whereIn('semester_id', $semesterIds)
            ->selectRaw('semester_id, COUNT(*) as course_count')
            ->groupBy('semester_id')
            ->pluck('course_count', 'semester_id');

        return Inertia::render('Dashboard/Index', [
            'currentDate' => now()->addDay()->format('F j, Y'),
            'faculties'   => $faculties,
            'noOfFaculty' => Faculty::count(),
            'noOfStudent' => Student::count(),
            'noOfCourse'  => Course::count(),
            'exams'       => $exams,
            'courseInfo'  => $courseInfo,
        ]);
    }
}
