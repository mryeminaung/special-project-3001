<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function setNameAttribute($name)
    {
        $this->attributes['name'] = ucwords($name);
    }

    public function students()
    {
        // return $this->hasMany(Student::class);
    }
}
