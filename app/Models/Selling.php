<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class Selling extends Model
{

    protected $fillable = [
        'product_id',
        'marketplace_id',
        'buyer',
        'sale_price',
        'total_price',
        'date',
    ];

    public function marketplace()
    {
        return $this->belongsTo(Marketplace::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
