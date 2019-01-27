import * as ActionTypes from './../ActionTypes';
import {sendPost} from './../../utils/request'
import cookie from 'js-cookie';
import history from './../../utils/history'


export const userInputChange = ({prop, value}) => {
	return {
		type: ActionTypes.USER_INPUT_CHANGE,
		payload: {prop, value}
	}
};

export const loginAction = () => {
	return (dispatch, getState) => {
		const payload = {
			client_id: 2,
			client_secret: 'SAmWbWW4sxehfrbzkX7690t4qbAf0vwPQp0wDzCe',
			username: getState().user.info.email,
			password: getState().user.info.password,
			grant_type: 'password'
		};
		sendPost('/oauth/token', payload).then(response => {
			if (response.data.access_token) {
				cookie.set('_rt_au', response.data.access_token, {
					path: '/',
					expires: 7
				});
				history.push('/');
			}
		}).catch(err => {
			if (err.response) {
				switch (err.response.status) {
					case 401:
						dispatch({type: ActionTypes.USER_V_ERROR, payload: {email: ['Invalid email or password']}})
				}
			}
		});
	}
};


export const logout = () => {
	return (dispatch) => {
		cookie.remove('_rt_au', {path: '/', expires: 1});
		history.push('/login')
	};
}


export const userState = () => {
	return (dispatch) => {
		console.log('testing..');
	}
}
