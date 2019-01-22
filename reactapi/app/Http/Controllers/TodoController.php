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


	/**
	 * @param Request $request
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function index(Request $request)
	{
		$id = (int)$request->id;
		if ($id)
			$todo = new TodoResource(Todo::where('id', $id)->first());
		else
			$todo = TodoResource::collection(Todo::orderBy('id', 'desc')->get());
		return response()->json(['status' => true, 'todo' => $todo]);
	}
}
