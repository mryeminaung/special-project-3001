<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $departments = [
            ["name" => "Natural Language", "dept_code" => "NL"],
            ["name" => "Natural Science", "dept_code" => "NS"],
            ["name" => "Computer Science", "dept_code" => "CS"],
            ["name" => "Computer Science and Technology", "dept_code" => "CST"],
            ["name" => "Computing", "dept_code" => "COMP"],
            ["name" => "Information Technology Service Management", "dept_code" => "ITSM"],
            ["name" => "Information Science", "dept_code" => "IS"]
        ];

        foreach ($departments as $department) {
            Department::create($department);
        }
    }
}
