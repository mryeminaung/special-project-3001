<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Department;
use App\Models\Faculty;
use App\Models\Rank;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Dr. Myat Thuzar Tun',
            'email' => 'myat_thuzar_tun@miit.edu.mm',
            'password' => 'password',
            'created_at' => now(),
        ]);

        User::create([
            'name' => 'Admin',
            'email' => 'admin@miit.edu.mm',
            'password' => 'password',
            'created_at' => now(),
        ]);

        $data = [];
        $usedEmails = []; // Track generated emails

        for ($faculty = 1; $faculty <= 60; $faculty++) {
            $isMale = $faculty % 2 == 0;
            $phoneNo = $this->generatePhoneNo();
            $name = $isMale
                ? $this->generateName(['Aung', 'Kyaw', 'Min', 'Tun', 'Soe', 'Naing'], 'U')
                : $this->generateName(['Moe', 'May', 'Hnin', 'Yin', 'Nwe', 'Thiri'], 'Daw');

            // Generate unique email
            $baseEmail = $this->generateBaseEmail($name);
            $email = $this->makeUniqueEmail($baseEmail, $usedEmails);

            $data[] = [
                'name' => $name,
                'email' => $email,
                'gender' => $isMale ? 'Male' : 'Female',
                'phone_number' => $phoneNo,
                'rank_id' => fake()->numberBetween(1, Rank::count()),
                'department_id' => fake()->numberBetween(1, Department::count()),
                'is_instructor_in_charge' => fake()->boolean(20),
                'max_duties' => 8,
                'current_duties' => 0,
                'created_at' => now(),
            ];

            // Batch insert every 20 records
            if ($faculty % 20 === 0) {
                Faculty::insert($data);
                $data = [];
            }
        }

        // Insert remaining records
        if (!empty($data)) {
            Faculty::insert($data);
        }
    }

    /**
     * Generate an email address based on the faculty's name.
     *
     * @param string $faculty
     * @param string $name
     * @return string
     */
    /**
     * Generate base email address based on the faculty's name.
     */
    private function generateBaseEmail(string $name): string
    {
        $cleanName = str_replace(['.', "'", 'Dr.', 'Daw', 'U'], '', $name);
        $username = preg_replace('/\s+/', '_', strtolower(trim($cleanName)));
        return "{$username}@miit.edu.mm";
    }

    /**
     * Ensure email uniqueness with incremental suffix if needed.
     */
    private function makeUniqueEmail(string $baseEmail, array &$usedEmails): string
    {
        $email = $baseEmail;
        $counter = 1;

        while (in_array($email, $usedEmails)) {
            $email = str_replace('@miit.edu.mm', "_{$counter}@miit.edu.mm", $baseEmail);
            $counter++;
        }

        $usedEmails[] = $email;
        return $email;
    }

    /**
     * Generate a Myanmar phone number with a random operator.
     *
     * @return string
     */
    private function generatePhoneNo(): string
    {
        $operators = [
            'Telenor' => ['7', '8'], // Example Telenor prefixes
            'Ooredoo' => ['9', '5'], // Example Ooredoo prefixes
            'MPT'     => ['6', '4'], // Example MPT prefixes
        ];

        // Randomly select an operator
        $operator = array_rand($operators);

        // Get a random prefix for the selected operator
        $prefix = fake()->randomElement($operators[$operator]);

        // Generate a random 8-digit subscriber numbe
        $subscriberNumber = fake()->numberBetween(10000000, 99999999);

        // Combine to form the phone number
        $phoneNumber = "+959 " . $prefix . $subscriberNumber;

        return $phoneNumber;
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
