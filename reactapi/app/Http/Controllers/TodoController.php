<?php

namespace App\Http\Controllers;

use App\Http\Resources\TodoResource;
use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
	public function create(Request $request)
	{
		$this->validate($request, [
			'value' => "required|min:4"
		]);

		$data['title'] = $request->value;

		if (Todo::create($data)) {
			return response()->json(['status' => true, 'msg' => 'created']);
		}
		return response()->json(['status' => false, 'msg' => 'invalid']);
	}

	public function index(Request $request)
	{
		$todo = Todo::orderBy('id', 'desc')->get();
		return response()->json(['status' => true, 'todo' => TodoResource::collection($todo)]);
	}
}
