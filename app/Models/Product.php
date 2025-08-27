<?php

namespace App\Models;

use App\Models\Detail;
use App\Models\Record;
use App\Models\Selling;
use App\Models\Category;
use App\Models\Purchase;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'sku',
        'category_id',
        'photo',
        'invoice',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function detail()
    {
        return $this->hasOne(Detail::class);
    }

    public function record()
    {
        return $this->hasOne(Record::class);
    }

    public function purpose()
    {
        return $this->hasOne(Purpose::class);
    }

    public function purchase()
    {
        return $this->hasOne(Purchase::class);
    }

    public function selling()
    {
        return $this->hasOne(Selling::class);
    }
}
