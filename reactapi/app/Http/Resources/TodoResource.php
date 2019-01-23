<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TodoResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @return array
	 */
	public function toArray($request)
	{

		$data = [
			'id' => $this->id,
			'todo' => $this->title,
		];

		if ($request->is_single === true) {
			$data['detail'] = $this->details;
		}

		return $data;
	}
}
