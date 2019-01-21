<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});


Route::group(['prefix' => 'todo'], function () {
	Route::post('/', 'TodoController@index');

	Route::post('/create', 'TodoController@create');
});