import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const sendPost = (url, payload, param = {}, withToken = false) => {

	return new Promise((resolve, reject) => {
		let token = '';
		if (withToken === true && !token) {
			return reject({internal_error: 'Access token is missing'});
		}

		let requestObj = {
			method: 'POST',
			url,
			data: payload,
			param
		};

		return resolve(axios(requestObj));
	})
};


export const sendGet = (url, params, withToken = false) => {
	return new Promise((resolve, reject) => {
		let token = '';
		if (withToken === true && !token) {
			return reject({internal_error: 'Access token is missing'});
		}

		let requestObject = {
			method: 'GET',
			url,
			params
		};
		return resolve(axios(requestObject));

	})
};

//delete
//put
//patch
