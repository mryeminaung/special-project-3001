<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{

    const TYPE_A = 1;
    const TYPE_B = 2;
    protected $fillable = ['type', 'capacity'];

    public function rooms()
    {
        return $this->hasMany(Room::class);
    }
}
