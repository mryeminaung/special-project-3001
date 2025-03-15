<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExamSchedule extends Model
{
    protected $fillable = ['semester_id', 'exam_date', 'exam_time_id', 'course_id', 'room_id', 'program_id', 'no_students'];

    public function examDuties()
    {
        return $this->hasMany(ExamDuty::class);
    }
    public function examPeriod()
    {
        return $this->belongsTo(ExamPeriod::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
