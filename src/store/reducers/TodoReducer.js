import * as ActionTypes from './../ActionTypes';

const initialState = {
	todoInputValue: '',
	todoDetailValue: '',
	todoListItems: [],
	loaded: false,
	selected: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.TODO_INPUT_CHANGE:
			state[action.payload.prop] = action.payload.value;
			return {
				...state
			};
		case ActionTypes.TODO_FETCH_ALL:
			state.todoListItems = action.payload;
			return {
				...state
			};
		case ActionTypes.TODO_LOADER:
			state.loaded = action.payload;
			return {
				...state
			};
		case ActionTypes.TODO_FETCH_SINGLE:
			state.selected = action.payload;
			return {
				...state
			};
		default:
			return state;
	}
}


