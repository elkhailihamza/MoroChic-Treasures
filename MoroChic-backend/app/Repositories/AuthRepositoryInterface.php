<?php

namespace App\Repositories;

interface AuthRepositoryInterface
{
    public function login($data, $request);
    
    public function register($request);
    
    public function logout($request);
    
    public function me($request);
}