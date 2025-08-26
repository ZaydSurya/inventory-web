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
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->nullable()->references('id')->on('products')->onDelete('set null');
            $table->enum('type', ['in', 'out'])->nullable();
            $table->integer('qty')->nullable();
            $table->foreignId('to_storage_id')->nullable()->references('id')->on('storages')->onDelete('set null');
            $table->foreignId('from_storage_id')->nullable()->references('id')->on('storages')->onDelete('set null');
            $table->date('date');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('records');
    }
};
