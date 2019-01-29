import * as ActionTypes from './../ActionTypes';

const initialState = {
	info: {
		email: '',
		password: ''
	},
	error: {},
	isAuthenticated: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.USER_INPUT_CHANGE:
			state.info[action.payload.prop] = action.payload.value;
			return {
				...state
			};
		case ActionTypes.USER_V_ERROR:
			state.error = action.payload;
			return {
				...state
			};
		case ActionTypes.USER_STATE:
			state.info.email = action.payload.email;
			state.info.uname = action.payload.name;
			state.info.id = action.payload.id;
			state.isAuthenticated = action.payload.isAuthenticated;
			if (state.isAuthenticated === false) {
				state.info.password = '';
			}
			return {
				...state
			};
		default:
			return state;
	}
}


