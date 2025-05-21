<?php

namespace App\Exports;

use App\Models\ExamDuty;
use App\Models\ReservedList;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class DutyListsExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $groupedDuties = ExamDuty::with(['faculty', 'role', 'examSchedule.course', 'examSchedule.room'])
            ->get()
            ->merge(ReservedList::with(['faculty'])->get())
            ->groupBy(function ($item) {
                return $item instanceof ExamDuty
                    ? $item->faculty_id
                    : $item->faculty->id;
            });
    
        $rows = collect();
    
        foreach ($groupedDuties as $facultyId => $items) {
            $faculty = $items->first()->faculty;
    
            foreach ($items as $item) {
                $rows->push([
                    'Faculty Name' => $faculty->name,
                    'Date' => $item->date,
                    'Exam Time' => $item instanceof ExamDuty ? $item->session : 'Reserved',
                    'Subject' => $item instanceof ExamDuty
                        ? $item->examSchedule->course->course_code
                        : 'Reserved Duty',
                    'Room' => $item instanceof ExamDuty
                        ? $item->examSchedule->room->name
                        : 'N/A',
                    'Role' => $item instanceof ExamDuty
                        ? $item->role->name
                        : 'Reserved',
                ]);
            }
        }
    
        return $rows;
    }
    

    public function headings(): array
    {
        return [
            'Faculty Name',
            'Date',
            'Exam Time',
            'Subject',
            'Room',
            'Role'
        ];
    }
}
