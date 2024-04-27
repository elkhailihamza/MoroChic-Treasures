<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

    public function removeAvatar(Request $request)
    {
        $user = $request->user();
        $avatar = $user->profile->avatar;
        if ($avatar) {
            if (file_exists(public_path($avatar))) {
                unlink(public_path($avatar));
            }
            $user->profile()->update(['avatar' => null]);
        }
        return response()->json([
            'message' => 'Avatar removed successfully!',
        ], 200);
    }

    public function updateInfo(Request $request)
    {
        try {
            $userInfo = $request->validate([
                "firstname" => "nullable|string|max:255",
                "lastname" => "nullable|string|max:255",
                "bio" => "nullable|string|max:500",
            ]);

            $user = $request->user();

            $user->firstname = $userInfo["firstname"];
            $user->lastname = $userInfo["lastname"];

            if (isset($userInfo['bio'])) {
                $user->profile->bio = $userInfo['bio'];
            }

            DB::beginTransaction();
            $user->save();
            $user->profile->save();
            DB::commit();
            return response()->json([
                'message' => 'User updated successfully!',
                'User' => $user->fresh(),
            ], 201);
        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'message' => "Update User Failed!",
                'errors' => $e->validator->errors()->all(),
            ]);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Profile Update Failed!',
                'error' => $e->getMessage(),
            ]);
        }
    }
}
