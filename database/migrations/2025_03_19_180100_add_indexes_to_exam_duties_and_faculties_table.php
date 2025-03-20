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
        // For faculties table
        Schema::table('faculties', function (Blueprint $table) {
            $table->index('current_duties');
            $table->index('max_duties');
        });

        // For exam_duties table
        Schema::table('exam_duties', function (Blueprint $table) {
            $table->index(['date', 'session', 'faculty_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('faculties', function (Blueprint $table) {
            $table->dropIndex(['current_duties']);
            $table->dropIndex(['max_duties']);
        });

        Schema::table('exam_duties', function (Blueprint $table) {
            $table->dropIndex(['date', 'session', 'faculty_id']);
        });
    }
};
