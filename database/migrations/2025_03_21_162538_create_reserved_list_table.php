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

        Schema::create('reserved_list', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->foreignId('faculty_id')->constrained('faculties');
            $table->timestamps();

            $table->unique(['date', 'faculty_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reserved_list');
    }
};
