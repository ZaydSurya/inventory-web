<?php

namespace App\Models;

use App\Models\Selling;
use App\Models\Purchase;
use Illuminate\Database\Eloquent\Model;

class Marketplace extends Model
{
    protected $fillable = [
        'name',
        'fee',
        'url',
    ];

    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

    public function sellings()
    {
        return $this->hasMany(Selling::class);
    }
}
