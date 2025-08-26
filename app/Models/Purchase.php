<?php

namespace App\Models;

use App\Models\Marketplace;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $fillable = [
        'product_id',
        'marketplace_id',
        'price',
        'date',
        'created_at',
        'updated_at',
        'deleted_at'
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
