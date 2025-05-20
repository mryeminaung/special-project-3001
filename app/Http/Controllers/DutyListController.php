<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ExamDuty;
use App\Models\ReservedList;
use Illuminate\Http\Request;

class DutyListController extends Controller
{
    public function index()
    {
        // Get all duties (exam + reserved) grouped by faculty
        $groupedDuties = ExamDuty::with(['faculty', 'role', 'examSchedule.course', 'examSchedule.room'])
            ->get()
            ->merge(ReservedList::with(['faculty'])->get())
            ->groupBy(function ($item) {
                return $item instanceof ExamDuty
                    ? $item->faculty_id
                    : $item->faculty->id;
            });

        // Structure data for Inertia
        $formattedData = $groupedDuties->map(function ($items, $facultyId) {
            $faculty = $items->first()->faculty ?? $items->first()->faculty;

            return [
                'faculty' => $faculty,
                'duties' => $items->map(function ($item) {
                    return [
                        'date' => $item->date,
                        'time' => $item instanceof ExamDuty ? $item->session : 'Reserved',
                        'subject' => $item instanceof ExamDuty
                            ? $item->examSchedule->course->course_code
                            : 'Reserved Duty',
                        'room' => $item instanceof ExamDuty
                            ? $item->examSchedule->room->name
                            : 'N/A',
                        'role' => $item instanceof ExamDuty
                            ? $item->role->name
                            : 'Reserved'
                    ];
                })
            ];
        })->values();

        return Inertia::render('DutyList/Index', [
            'groupedDuties' => $formattedData
        ]);
    }
}
