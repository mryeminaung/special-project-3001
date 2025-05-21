<?php
namespace App\Exports;

use App\Models\ExamSchedule;
use App\Models\Semester;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TimetablesExport implements FromCollection,  WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $examSchedules = ExamSchedule::where('semester_id', request('semesterId'))
        ->with(['room', 'course.program',])
        ->get();

        $groupedExams = $examSchedules->groupBy(function ($exam) {
            return $exam->course->course_code . '-' . $exam->exam_date . '-' . $exam->exam_time_id;
        });

        $mergedData = $groupedExams->map(function ($group) {
            $firstExam = $group->first();

            return [
                'course_code'  => $firstExam->course->course_code,
                'title'        => $firstExam->course->title,
                'rooms'        => $group->pluck('room.name')->implode(', '),
                'no_students'  => $firstExam->no_students,
                'exam_date'    => $firstExam->exam_date,
                'exam_time_id' => $firstExam->exam_time_id === 1 ? 'AM': 'PM',
                'program'      => $firstExam->course->program->name,
            ];
        })->values();

        return $mergedData;
    }

    public function headings(): array
    {
        return [
            'Course Code',
            'Course Name',
            'Rooms',
            'No. of Students',
            'Exam Date',
            'Exam Time ID',
            'Program',
        ];
    }
}
