<?php
//Show view to only authenticated users
Route::get('/', 'Web\AppController@getApp')->middleware('auth');

//oauth login for all users
Route::get('/login', 'Web\AppController@getLogin')->name('login')->middleware('guest');

Route::get('/login/google','Web\AuthController@getSocialRedirect')->middleware('guest');
Route::get('/login/google/callback','Web\AuthController@getSocialCallback')->middleware('guest');
