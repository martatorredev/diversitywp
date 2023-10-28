<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// Version Lumen/Laravel
$router->get('/', function () use ($router) {
    return $router->app->version();
});

// Usuario
$router->post('/login', 'UserController@login');
$router->get('/users', 'UserController@index');
$router->post('/registro', 'UserController@store');
$router->get('/user/desactivar/{id}', 'UserController@desactivar');
$router->delete('/user/eliminar/{id}', 'UserController@destroy');
$router->get('/user/activar/{id}', 'UserController@activar');
$router->post('/user/update/{id}', 'UserController@update');
$router->get('/user/{id}', 'UserController@show');
$router->get('/buscar_user/{palabra}', 'UserController@search');
$router->get('/users/pagination', 'UserController@pagination');

// Wordcamp Basic
$router->get('/wordcamps', 'WordcampController@index');
$router->post('/wordcamp', 'WordcampController@store');
$router->get('/wordcamp/desactivar/{id}', 'WordcampController@desactivar');
$router->delete('/wordcamp/eliminar/{id}', 'WordcampController@destroy');
$router->get('/wordcamp/activar/{id}', 'WordcampController@activar');
$router->post('/wordcamp/update/{id}', 'WordcampController@update');
$router->get('/wordcamp/{id}', 'WordcampController@show');
$router->get('/buscar_wordcamp/{palabra}', 'WordcampController@search');
$router->get('/buscar_wordcamp/user/{id}/{palabra}', 'WordcampController@searchUser');
$router->get('/wordcamps/user/{id}', 'WordcampController@user');
$router->get('/wordcamps/pagination', 'WordcampController@pagination');


$router->get('/wordcamps/paises', 'WordcampController@paises');
$router->get('/wordcamps/estados', 'WordcampController@estados');
$router->get('/wordcamps/anos', 'WordcampController@anos');
$router->post('/wordcamps/estado', 'WordcampController@estado');

// Wordcamp EST/COM
$router->post('/wordcamp/estadisticas', 'WordcampController@estadistica');
$router->post('/wordcamp/comparar', 'WordcampController@comparar');

