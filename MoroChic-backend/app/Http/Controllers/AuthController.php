<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $data = $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if (!Auth::attempt($data)) {
                return response()->json([
                    'errors' => [
                        'message' => 'Wrong Credentials',
                        'details' => 'Invalid username or password',
                    ]
                ], 400);
            }

            $user = User::where('email', $request['email'])->firstOrFail();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Successfully logged in!',
                'access_token' => $token,
                'user' => $user,
                'token_type' => 'Bearer',
            ], 200);
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

            DB::beginTransaction();
            $user = User::create([
                'username' => $request->input('username'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'role_id' => 1,
            ]);

            Profile::create([
                'user_id' => $user->id,
            ]);

            if (!$user) {
                throw new Exception('Failed to create user!');
            }
            DB::commit();

            return response()->json([
                'message' => 'Successfully created account!',
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Registration Failed!',
                'errors' => $e->validator->errors(),
            ], 422);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Registration Failed!',
                'errors' => $e->getMessage(),
            ], 500);
        }
    }
    public function logout(Request $request)
    {
        try {
            $request->user()->tokens()->delete();
            return response()->json(['message' => 'logged out successfully!'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
    public function me(Request $request)
{
    $currentUser = User::select('users.*', 'roles.role_name', 'profiles.avatar')
        ->join('roles', 'users.role_id', '=', 'roles.id')
        ->join('profiles', 'users.id', '=', 'profiles.user_id')
        ->where('users.id', '=', $request->user()->id)
        ->first();

    return response()->json([
        'user' => $currentUser,
    ], 200);
}
}
