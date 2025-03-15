<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomUsage extends Model
{
    protected $fillable = ['date', 'exam_time_id', 'room_id', 'exam_schedule_id'];

    /**
     * Get the room associated with the usage.
     */
    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    /**
     * Get the exam schedule associated with the usage.
     */
    public function examSchedule()
    {
        return $this->belongsTo(ExamSchedule::class);
    }
}