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
        Schema::create('room_usages', function (Blueprint $table) {
            $table->id();
            $table->date('date'); // Date of room usage
            $table->foreignId('exam_time_id')->constrained('exam_periods'); // AM/PM tracking
            $table->foreignId('room_id')->constrained()->cascadeOnDelete(); // Foreign key to rooms table
            $table->foreignId('exam_schedule_id')->nullable()->constrained()->cascadeOnDelete(); // Foreign key to exam_schedules table
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('room_usages');
    }
};
