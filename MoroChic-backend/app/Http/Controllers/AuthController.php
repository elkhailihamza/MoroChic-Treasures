<?php

namespace App\Http\Controllers;

use App\Repositories\AuthRepositoryInterface;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    protected $authRepository;

    public function __construct(AuthRepositoryInterface $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    public function login(Request $request)
    {
        try {
            $data = $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);

            $response = $this->authRepository->login($data, $request);

            return response()->json($response, 200);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Login Failed!',
                'errors' => $e->validator->errors(),
            ], 422);
        }
    }

    public function register(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string|min:3|max:255',
                'email' => 'required|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed',
            ]);

            $response = $this->authRepository->register($request);

            return response()->json($response, 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Registration Failed!',
                'errors' => $e->validator->errors(),
            ], 422);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Registration Failed!',
                'errors' => $e->getMessage(),
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            $response = $this->authRepository->logout($request);

            return response()->json($response, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    public function me(Request $request)
    {
        $response = $this->authRepository->me($request);

        return response()->json($response, 200);
    }
}
