<?php

namespace App\Models;

use App\Models\Product;
use App\Models\Storage;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    protected $fillable = [
        'product_id',
        'storage_id',
        'description',
        'condition',
        'qty',
        'price',
        'warranty_on',
        'warranty_off',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function storage()
    {
        return $this->belongsTo(Storage::class);
    }
}
