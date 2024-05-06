<?php

namespace App\Repositories;

use App\Models\Profile;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthRepository implements AuthRepositoryInterface
{
    public function login($data, $request)
    {
        try {
            if (!auth()->attempt($data)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }

            $user = $request->user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return [
                'message' => 'Successfully logged in!',
                'access_token' => $token,
                'user' => $user,
                'token_type' => 'Bearer',
            ];
        } catch (ValidationException $e) {
            throw $e;
        }
    }

    public function register($request)
    {
        try {
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

            DB::commit();

            return [
                'message' => 'Successfully created account!',
            ];
        } catch (ValidationException $e) {
            throw $e;
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Registration Failed!', 500, $e);
        }
    }

    public function logout($request)
    {
        try {
            $request->user()->tokens()->delete();
            return ['message' => 'Logged out successfully!'];
        } catch (Exception $e) {
            throw new Exception($e->getMessage(), 401);
        }
    }

    public function me($request)
    {
        $currentUser = User::select('users.*', 'roles.role_name', 'profiles.avatar')
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->join('profiles', 'users.id', '=', 'profiles.user_id')
            ->where('users.id', '=', $request->user()->id)
            ->first();

        return ['user' => $currentUser];
    }
}
