<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define years, departments, and roll numbers
        // $year_sems = ['2018' => 9, '2019' => 7, '2021' => 5, '2022' => 3, '2023' => 1];
        $year_sems = ['2019' => 7, '2021' => 5, '2022' => 3, '2023' => 1];
        $majors = ['cse', 'ece'];

        $rollNumbers = range(1, 60); // 001 to 060
        $data = [];

        // Define male and female name components
        $maleNames = ['Aung', 'Kyaw', 'Min', 'Tun', 'Soe', 'Naing'];
        $femaleNames = ['Moe', 'May', 'Hnin', 'Yin', 'Nwe', 'Thiri'];

        foreach ($year_sems as $year => $sem_id) {
            foreach ($majors as $major) {
                $majorId = $major == 'cse' ? 1 : 2;
                foreach ($rollNumbers as $rollNumber) {
                    $formattedRoll = str_pad($rollNumber, 3, '0', STR_PAD_LEFT); // Format as 001, 002, ...
                    $email = "{$year}-miit-{$major}-{$formattedRoll}@miit.edu.mm";

                    // Even rolls: Male, Odd rolls: Female
                    $isMale = $rollNumber % 2 == 0;

                    // Determine gender and create a name with up to three parts
                    $nameComponents = $isMale
                        ? $this->generateName($maleNames, 'Mg')
                        : $this->generateName($femaleNames, 'Ma');

                    $data[] = [
                        'name' => $nameComponents,
                        'email' => $email,
                        'status' => 'Active',
                        'major_id' => $majorId,
                        'semester_id' => $sem_id,
                        'gender' => $isMale ? 'Male' : 'Female',
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];
                }
            }
        }
        Student::insert($data);
    }

    /**
     * Generate a three-part name with a prefix.
     *
     * @param array $nameParts
     * @param string $prefix
     * @return string
     */
    private function generateName(array $nameParts, string $prefix): string
    {
        shuffle($nameParts); // Randomize name parts
        $selectedParts = array_slice($nameParts, 0, rand(2, 3)); // Choose 2-3 parts
        return $prefix . ' ' . implode(' ', $selectedParts); // Combine with prefix
    }
}
