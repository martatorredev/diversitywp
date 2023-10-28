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
        Schema::create('wordcamps', function (Blueprint $table) {
            $table->id();
            $table->integer('id_user');
            $table->integer('id_admin')->nullable();
            $table->string('pais');
            $table->string('estado');
            $table->integer('ano');
            $table->string('formato');
            $table->integer('ponent_total');
            $table->integer('ponent_mujer');
            $table->integer('ponent_hombre');
            $table->integer('ponent_nobinario');
            $table->integer('nsnc');
            $table->float('representacion');
            $table->boolean('activo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wordcamps');
    }
};
