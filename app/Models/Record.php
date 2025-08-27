<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    protected $fillable = [
        'product_id',
        'type',
        'qty',
        'to_storage_id',
        'from_storage_id',
        'date',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
