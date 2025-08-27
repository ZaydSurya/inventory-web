<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class Purpose extends Model
{
    protected $fillable = [
        'product_id',
        'type',
        'status',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
