<?php

namespace App\Models;

use App\Models\Detail;
use Illuminate\Database\Eloquent\Model;

class Storage extends Model
{
    protected $fillable = [
        'name',
        'location',
        'photo',
    ];

    public function details()
    {
        return $this->hasMany(Detail::class);
    }
}
