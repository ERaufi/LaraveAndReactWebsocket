<?php

use App\Events\PrivateChannelEvent;
use App\Events\PublicChannelEvent;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('test', function () {
    event(new PrivateChannelEvent('This is Private Event', 1));
    event(new PublicChannelEvent('Public Event'));
    return 'done';
});
