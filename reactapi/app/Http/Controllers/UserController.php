<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
	public function fetchState(Request $request)
	{
		return response()->json(['status' => true, 'user' => new UserResource(Auth::guard('api')->user())]);
	}
}
