<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'gender', 'phone_number', 'email', 'rank_id', 'department_id', 'max_duties', 'current_duties', 'is_instructor_in_charge'];

    public function scopeFilter($query, $filter)
    {
        $query->when($filter['rank'] ?? false, function ($query, $name) {
            $query->whereHas('rank', function ($query) use ($name) {
                $query->where('title', $name);
            });
        });
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public function rank()
    {
        return $this->belongsTo(Rank::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function examDuties()
    {
        return $this->hasMany(ExamDuty::class);
    }

    public function canInvigilate()
    {
        return in_array($this->rank->title, ['Professor', 'Associate Professor']);
    }

    public function canCoInvigilate()
    {
        return in_array($this->rank->title, ['Lecturer', 'Assistant Lecturer']);
    }

    public function getDailyAssignmentsAttribute()
    {
        return $this->examDuties()
            ->get(['date', 'session'])
            ->groupBy('date')
            ->map(fn($day) => $day->pluck('session'));
    }
}
