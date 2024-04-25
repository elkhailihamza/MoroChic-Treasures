<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ProfileController extends Controller
{
    public function getUserProfile(Request $request)
    {
        $user = $request->user();
        return response()->json([
            'profile' => $user->profile,
        ], 200);
    }
    public function updateAvatar(Request $request)
    {
        $request->validate([
            "avatar" => "nullable|image|mimes:jpeg,png,jpg,gif|max:2048",
        ]);

        $user = $request->user();

        if ($request->hasFile('avatar')) {
            if ($user->profile->avatar && file_exists(storage_path('app/public/' . $user->profile->avatar))) {
                unlink(storage_path('app/public/' . $user->profile->avatar));
            }
            $avatarPath = $request->file('avatar')->store('uploads', 'public');
            $user->profile->avatar = $avatarPath;
            $user->profile->save();
        }

        return response()->json([
            'success' => 'Avatar updated successfully',
            'avatar' => $avatarPath
        ], 201);
    }

    public function updateInfo(Request $request)
    {
        try {
            $userInfo = $request->validate([
                "firstname" => "required|string|max:255",
                "lastname" => "required|string|max:255",
                "Bio" => "nullable|string|max:500",
            ]);

            $user = $request->user();

            $user->firstname = $userInfo["firstname"];
            $user->lastname = $userInfo["lastname"];

            if (isset($userInfo['Bio'])) {
                $user->profile->bio = $userInfo['Bio'];
            }

            $user->save();
            return response()->json([
                'message' => 'User updated successfully!',
                'User' => $user->fresh(),
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => "Update User Failed!",
                'errors' => $e->validator->errors()->all(),
            ]);
        }
    }
}
