<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Selling extends Model
{
    public function marketplace()
    {
        return $this->belongsTo(Marketplace::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
