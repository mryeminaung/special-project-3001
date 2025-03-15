<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExamDuty extends Model
{
    protected $fillable = ['exam_schedule_id', 'faculty_id', 'role_id', 'date', 'session'];

    public function examSchedule()
    {
        return $this->belongsTo(ExamSchedule::class);
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
