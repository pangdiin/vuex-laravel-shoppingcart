<?php


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('api')->group(function() {
	
	Route::get('/products', 'ProductController@index');

	Route::prefix('/cart')->group(function() {
		Route::get('/', 'CartController@index');
		Route::post('add', 'CartController@store');
		Route::patch('update', 'CartController@update');
		Route::delete('delete/{rowId}', 'CartController@delete');
		Route::delete('destroy', 'CartController@destroy');
	});

});
