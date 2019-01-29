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
		if ($id) {
			$request->request->add(['is_single' => true]);
			$todo = new TodoResource(Todo::where('id', $id)->first());
		} else
			$todo = TodoResource::collection(Todo::orderBy('id', 'desc')->get());
		return response()->json(['status' => true, 'todo' => $todo]);
	}


	public function updateDetails(Request $request)
	{
		$this->validate($request, [
			'detail' => 'required',
			'id' => 'required|numeric'
		]);


		$todoID = (int)$request->id;
		$details = $request->detail;

		$todo = Todo::find($todoID);
		$todo->details = $details;

		$todo->save();
		return response()->json(['status' => true]);
	}

	public function remove(Request $request)
	{
		$id = (int)$request->id;
		Todo::where(['id' => $id])->delete();
		return response()->json(['status' => true]);
	}
}

