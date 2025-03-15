<?php

namespace Database\Seeders;

use App\Models\Room;
use App\Models\RoomType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RoomType::create([
            'type' => 'Type A',
            'capacity' => 60
        ]);

        RoomType::create([
            'type' => 'Type B',
            'capacity' => 30
        ]);

        for ($roomNo = 200; $roomNo <= 220; $roomNo++) {
            $roomName = $roomNo;

            Room::create([
                'name' => $roomName,
                'room_type_id' => fake()->randomElement([1, 2])
            ]);
        }
    }
}
