<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReservedList extends Model
{
    protected $table = 'reserved_list';
    protected $fillable = ['date', 'faculty_id'];
    
    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }
}