<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('todos', function (Blueprint $table) {
			$table->increments('id');
			$table->unsignedInteger('user_id')->nullable();
			$table->string('title');
			$table->text('details')->nullable();
			$table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('todos');
	}
}
