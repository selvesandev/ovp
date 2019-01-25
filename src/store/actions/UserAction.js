import * as ActionTypes from './../ActionTypes';
import {sendPost} from './../../utils/request'


export const userInputChange = ({prop, value}) => {
	return {
		type: ActionTypes.USER_INPUT_CHANGE,
		payload: {prop, value}
	}
};

export const loginAction = () => {
	const serverKey = 'SAmWbWW4sxehfrbzkX7690t4qbAf0vwPQp0wDzCe';
	const clientID = 2;
	return (dispatch, getState) => {
		sendPost('/user/login', getState().user.info).then(response => {
			console.log(response);
		});
	}
};
