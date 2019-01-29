import * as ActionTypes from './../ActionTypes';
import {sendPost} from './../../utils/request'

export const todoInputChange = ({prop, value}) => {

	return {
		type: ActionTypes.TODO_INPUT_CHANGE,
		payload: {prop, value}
	}
};


export const fetchAllTodoList = () => {
	return (dispatch) => {
		dispatch({type: ActionTypes.TODO_LOADER, payload: false});
		sendPost('/todo', {}, {}, true).then(res => {
			if (res.data.status === true) {
				dispatch({type: ActionTypes.TODO_FETCH_ALL, payload: res.data.todo})
			}
			dispatch({type: ActionTypes.TODO_LOADER, payload: true});
		}).catch(err => {
			// if ((err && err.access_error) || err.response === undefined) {
			// 	dispatch(logout())
			// }
		})
		//send request to server.
	}
};

export const submitTodo = () => {
	return (dispatch, getState) => {
		const {todoInputValue} = getState().todo;
		if (todoInputValue.length < 3) return false;

		sendPost('/todo/create', {value: todoInputValue}, {}, true).then(res => {
			if (res.data.status === true) {
				dispatch(fetchAllTodoList());
				dispatch(todoInputChange({prop: 'todoInputValue', value: ''}))
			}
		})
	}
};


export const fetchSingleTodoList = (id) => {
	return (dispatch) => {
		dispatch({type: ActionTypes.TODO_FETCH_SINGLE, payload: {}});
		sendPost('/todo', {id}, {}, true).then(res => {
			if (res.data.status === true) {
				dispatch({type: ActionTypes.TODO_FETCH_SINGLE, payload: res.data.todo});
			}
		}).catch(err => {
			// console.log(err);
		})
	}
};

export const saveDetails = () => {
	return (dispatch, getState) => {
		const {todoDetailValue, selected} = getState().todo;

		if (todoDetailValue.length < 10) return false;

		sendPost('/todo/detail', {detail: todoDetailValue, id: selected.id}, {}, true).then(res => {
			if (res.data.status === true) {
				dispatch(todoInputChange({prop: 'todoDetailValue', value: ''}));
				dispatch(fetchSingleTodoList(selected.id));
			}
		})
	}
};


export const removeTodo = (id) => {
	return (dispatch) => {
		sendPost('/todo/remove', {id}, {}, true).then(response => {
			if (response.data.status === true) {
				dispatch(fetchAllTodoList())
			}
		})
	}
};
