<?php

namespace Database\Seeders;

use App\Models\Rank;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ranks = [
            ["title" => "Professor", "description" => "Senior academic leader specializing in specific fields."],
            ["title" => "Associate Professor", "description" => "Mid-level academic role with research and teaching responsibilities."],
            ["title" => "Lecturer", "description" => "Responsible for delivering lectures and guiding students."],
            ["title" => "Assistant Lecturer", "description" => "Supports lecturers in teaching and grading."],
        ];

        foreach ($ranks as $rank) {
            Rank::create($rank);
        }
    }
}
