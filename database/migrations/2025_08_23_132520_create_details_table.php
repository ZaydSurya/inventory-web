<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->references('id')->on('products')->onDelete('cascade')->nullable();
            $table->foreignId('storage_id')->references('id')->on('storages')->onDelete('set null')->nullable();
            $table->text('description')->nullable();
            $table->enum('condition',['new','old'])->nullable();
            $table->integer('qty')->nullable();
            $table->string('price')->nullable();
            $table->date('warranty_on')->nullable();
            $table->date('warranty_off')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('details');
    }
};
