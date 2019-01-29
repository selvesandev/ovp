<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});


Route::group(['prefix' => 'todo', 'middleware' => 'auth:api'], function () {
	Route::post('/', 'TodoController@index');
	Route::post('/detail', 'TodoController@updateDetails');
	Route::post('/create', 'TodoController@create');
	Route::post('/remove', 'TodoController@remove');
});

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function () {
	Route::post('/state', 'UserController@fetchState');
	Route::post('/update', 'UserController@updateAction');
	Route::post('/password', 'UserController@updatePassword');
//	Route::post('/login', 'UserController@login');
});