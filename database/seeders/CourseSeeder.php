<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courseTypes = [
            ['name' => "Core"],
            ['name' => "Elective"],
            ['name' => "Lab"],
        ];
        CourseType::insert($courseTypes);

        $sem_7 = [
            [
                "title" => "Operating Systems",
                "course_code" => "CSE 4010",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 1,
                "semester_id" => 7
            ],
            [
                "title" => "Design & Analysis of Algorithms",
                "course_code" => "CSE 4020",
                "course_type_id" => 1,
                "credit" => 3,
                "program_id" => 1,
                "faculty_id" => 2,
                "semester_id" => 7
            ],
            [
                "title" => "Computer Networks II",
                "course_code" => "CSE 4030",
                "course_type_id" => 1,
                "credit" => 3,
                "program_id" => 1,
                "faculty_id" => 3,
                "semester_id" => 7
            ],
            [
                "title" => "Computer Networks II Lab",
                "course_code" => "CSE 4031",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 1,
                "faculty_id" => 4,
                "semester_id" => 7
            ],
            [
                "title" => "Embedded System I",
                "course_code" => "ECE 4010",
                "course_type_id" => 1,
                "credit" => 3,
                "program_id" => 3,
                "faculty_id" => 5,
                "semester_id" => 7
            ],
            [
                "title" => "Embedded System I Lab",
                "course_code" => "ECE 4011",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 3,
                "faculty_id" => 6,
                "semester_id" => 7
            ],
            [
                "title" => "Digital Signal Processing",
                "course_code" => "ECE 4020",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 7,
                "semester_id" => 7
            ],
            [
                "title" => "Wireless Communication",
                "course_code" => "ECE 4030",
                "course_type_id" => 1,
                "credit" => 3,
                "program_id" => 2,
                "faculty_id" => 8,
                "semester_id" => 7
            ],
            [
                "title" => "Wireless Sensor Networks",
                "course_code" => "ECE 4040",
                "course_type_id" => 1,
                "credit" => 3,
                "program_id" => 2,
                "faculty_id" => 9,
                "semester_id" => 7
            ],
            [
                "title" => "Wireless Sensor Networks Lab",
                "course_code" => "ECE 4041",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 2,
                "faculty_id" => 10,
                "semester_id" => 7
            ],
            [
                "title" => "Social and Business Etiquette",
                "course_code" => "HSS C013",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 3,
                "faculty_id" => 11,
                "semester_id" => 7
            ]
        ];

        $sem_5 = [
            [
                "title" => "Database Systems I",
                "course_code" => "CSE 3020",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 1,
                "faculty_id" => 12,
                "semester_id" => 5
            ],
            [
                "title" => "Microprocessors & Interfacing",
                "course_code" => "ECE 3010",
                "course_type_id" => 1,
                "credit" => 3,
                "program_id" => 3,
                "faculty_id" => 13,
                "semester_id" => 5
            ],
            [
                "title" => "Microprocessors & Interfacing Lab",
                "course_code" => "ECE 3011",
                "course_type_id" => 1,
                "credit" => 2,
                "program_id" => 3,
                "faculty_id" => 14,
                "semester_id" => 5
            ],
            [
                "title" => "Signals & Systems",
                "course_code" => "ECE 3020",
                "course_type_id" => 1,
                "credit" => 3,
                "program_id" => 3,
                "faculty_id" => 15,
                "semester_id" => 5
            ],
            [
                "title" => "Electronics II",
                "course_code" => "ECE 3030",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 2,
                "faculty_id" => 16,
                "semester_id" => 5
            ],
            [
                "title" => "Electronics II Lab",
                "course_code" => "ECE 3031",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 2,
                "faculty_id" => 17,
                "semester_id" => 5
            ],
            [
                "title" => "Data Structures & Algorithms",
                "course_code" => "ECE 3060",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 2,
                "faculty_id" => 18,
                "semester_id" => 5
            ],
            [
                "title" => "English V",
                "course_code" => "LANG 3010",
                "course_type_id" => 1,
                "credit" => 2,
                "program_id" => 3,
                "faculty_id" => 19,
                "semester_id" => 5
            ],
            [
                "title" => "Mathematics V",
                "course_code" => "MATH 3010",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 20,
                "semester_id" => 5
            ],
            [
                "title" => "Principles of Economics",
                "course_code" => "HSS C012",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 3,
                "faculty_id" => 21,
                "semester_id" => 5
            ],
            [
                "title" => "Lab Course 4 (Linux)",
                "course_code" => "LAB C004",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 1,
                "faculty_id" => 22,
                "semester_id" => 5
            ],
            [
                "title" => "Lab Course 3 (System Administration)",
                "course_code" => "LAB C003",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 2,
                "faculty_id" => 23,
                "semester_id" => 5
            ]
        ];

        $sem_3 = [
            [
                "title" => "Programming III",
                "course_code" => "CSE 2010",
                "course_type_id" => 1,
                "credit" => 5,
                "program_id" => 1,
                "faculty_id" => 24,
                "semester_id" => 3
            ],
            [
                "title" => "Basic Electric Circuits",
                "course_code" => "ECE 2010",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 25,
                "semester_id" => 3
            ],
            [
                "title" => "Basic Electric Circuits Lab",
                "course_code" => "ECE 2011",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 3,
                "faculty_id" => 26,
                "semester_id" => 3
            ],
            [
                "title" => "Digital Design",
                "course_code" => "ECE 2020",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 27,
                "semester_id" => 3
            ],
            [
                "title" => "Digital Design Lab",
                "course_code" => "ECE 2021",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 3,
                "faculty_id" => 5,
                "semester_id" => 3
            ],
            [
                "title" => "Arduino-Based System Design",
                "course_code" => "ECE 2030",
                "course_type_id" => 1,
                "credit" => 3,
                "program_id" => 2,
                "faculty_id" => 6,
                "semester_id" => 3
            ],
            [
                "title" => "English III",
                "course_code" => "LANG 2010",
                "course_type_id" => 1,
                "credit" => 2,
                "program_id" => 3,
                "faculty_id" => 7,
                "semester_id" => 3
            ],
            [
                "title" => "Mathematics III",
                "course_code" => "MATH 2010",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 8,
                "semester_id" => 3
            ],
            [
                "title" => "Physics III",
                "course_code" => "PHY 2010",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 9,
                "semester_id" => 3
            ]
        ];

        $sem_1 = [
            [
                "title" => "Chemistry",
                "course_code" => "CHEM 1012",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 1,
                "semester_id" => 1
            ],
            [
                "title" => "Chemistry Lab",
                "course_code" => "CHEM 1011",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 3,
                "faculty_id" => 2,
                "semester_id" => 1
            ],
            [
                "title" => "Programming I",
                "course_code" => "CSE 1012",
                "course_type_id" => 1,
                "credit" => 5,
                "program_id" => 3,
                "faculty_id" => 3,
                "semester_id" => 1
            ],
            [
                "title" => "English I",
                "course_code" => "LANG 1012",
                "course_type_id" => 1,
                "credit" => 2,
                "program_id" => 3,
                "faculty_id" => 4,
                "semester_id" => 1
            ],
            [
                "title" => "Mathematics I",
                "course_code" => "MATH 1012",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 5,
                "semester_id" => 1
            ],
            [
                "title" => "Physics I",
                "course_code" => "PHY 1012",
                "course_type_id" => 1,
                "credit" => 4,
                "program_id" => 3,
                "faculty_id" => 6,
                "semester_id" => 1
            ],
            [
                "title" => "Physics I Lab",
                "course_code" => "PHY 1011",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 3,
                "faculty_id" => 7,
                "semester_id" => 1
            ],
            [
                "title" => "Myanmar Language & Culture",
                "course_code" => "HSS C011",
                "course_type_id" => 1,
                "credit" => 1,
                "program_id" => 3,
                "faculty_id" => 8,
                "semester_id" => 1
            ]
        ];

        Course::insert($sem_7);
        Course::insert($sem_5);
        Course::insert($sem_3);
        Course::insert($sem_1);
    }
}
