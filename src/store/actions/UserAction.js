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
			client_secret: 'jpV523GqIsIWYz2u26bLavaYqdJL84er0AMjWweu',
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
			console.log(err);
			if (err.response) {
				switch (err.response.status) {
					case 401:
						dispatch({type: ActionTypes.USER_V_ERROR, payload: {email: ['Invalid email or password']}});
						break;
					default:
						return false;
				}
			}
		});
	}
};


export const logout = () => {
	return (dispatch) => {
		dispatch({type: ActionTypes.USER_STATE, payload: {email: '', password: '', isAuthenticated: false}});
		cookie.remove('_rt_au', {path: '/', expires: 1});
		history.push('/login')
	};
};


export const isAuthenticated = () => {
	return (dispatch) => {
		sendPost('/user/state', {}, {}, true).then(res => {

			if (res.data.status === true) {
				dispatch({
					type: ActionTypes.USER_STATE,
					payload: {
						...res.data.user,
						isAuthenticated: true
					}
				});
			}
		}).catch(err => {
			if (err && err.response === undefined) {
				dispatch(logout())
			}
		})
	}
}