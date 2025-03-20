<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('faculties', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('gender', ['male', 'female', 'other']);
            $table->string('phone_number')->unique();
            $table->string('email')->unique();
            $table->foreignId('rank_id')->constrained()->onDelete('cascade');
            $table->foreignId('department_id')->constrained()->onDelete('cascade');
            $table->boolean('is_instructor_in_charge')->default(false);
            $table->unsignedInteger('current_duties')->default(0);
            $table->unsignedInteger('max_duties')->default(8);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('faculty');
    }
};
