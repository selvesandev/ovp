<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
	public function fetchState(Request $request)
	{
		return response()->json(['status' => true, 'user' => new UserResource(Auth::guard('api')->user())]);
	}

	public function updateAction(Request $request)
	{
		$id = (int)$request->id;
		$this->validate($request, [
			'email' => [
				'required',
				'email',
				Rule::unique('users')->ignore($id)
			]
		]);

		$user = User::findOrFail($id);
		$user->name = $request->uname;
		$user->email = $request->email;
		$user->save();
		return response()->json(['status' => true]);
	}

	public function updatePassword(Request $request)
	{
		$this->validate($request, [
			'id' => 'required',
			'password' => 'required|confirmed',
			'oldpassword' => 'required',
		]);

		$id = (int)$request->id;
		$user = User::findOrFail($id);

		if (!Hash::check($request->oldpassword, $user->password)) {
			throw \Illuminate\Validation\ValidationException::withMessages([
				'oldpassword' => ['Old password does not match'],
			]);
		}

		$user->password = bcrypt($request->password);
		$user->save();
		return response()->json(['status' => true]);

	}
}
