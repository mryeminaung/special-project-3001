<?php

namespace App\Services;

use App\Models\{Faculty, ExamSchedule, ExamDuty, ReservedList};
use App\Models\Rank;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ReservedListAllocator
{
    public function allocateForDate(string $date)
    {
        // Get professors who shouldn't be in reserved list
        $professorRankIds = Rank::where('title', 'Professor')
            ->pluck('id');


        // Get faculty who are course instructors for the date
        $excludedFaculty = ExamSchedule::with('course')
            ->where('exam_date', $date)
            ->get()
            ->pluck('course.faculty_id')
            ->filter()
            ->unique();

        // Get faculty already assigned duties
        $busyFaculty = ExamDuty::where('date', $date)
            ->pluck('faculty_id');

        // Get current reserved list count for fairness
        $reservedCounts = ReservedList::select('faculty_id', DB::raw('count(*) as count'))
            ->groupBy('faculty_id')
            ->get()
            ->keyBy('faculty_id');

        // Find eligible teachers with fairness algorithm
        $reservedFaculty = Faculty::with('rank')
            ->whereNotIn('id', $excludedFaculty)
            ->whereNotIn('id', $busyFaculty)
            ->whereNotIn('rank_id', $professorRankIds) // Exclude professors
            ->whereColumn('current_duties', '<', 'max_duties')
            ->get()
            ->sortBy(function ($faculty) use ($reservedCounts) {
                return [
                    $reservedCounts[$faculty->id]->count ?? 0, // Fewest reserved first
                    $faculty->current_duties // Least busy first
                ];
            })
            ->take(5);

        if ($reservedFaculty->count() < 5) {
            Log::warning("Only found {$reservedFaculty->count()} eligible teachers for reserved list on {$date}");
        }

        foreach ($reservedFaculty as $teacher) {
            ReservedList::firstOrCreate([
                'date' => $date,
                'faculty_id' => $teacher->id
            ]);
        }
    }
}
