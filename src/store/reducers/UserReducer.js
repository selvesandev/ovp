import * as ActionTypes from './../ActionTypes';

const initialState = {
	info: {
		email: '',
		password: ''
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.USER_INPUT_CHANGE:
			state.info[action.payload.prop] = action.payload.value;
			return {
				...state
			};
	}
	return state;
}


