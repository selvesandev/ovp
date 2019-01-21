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
		sendPost('/todo').then(res => {
			if (res.data.status === true) {
				dispatch({type: ActionTypes.TODO_FETCH_ALL, payload: res.data.todo})
			}
		}).catch(err => {
			// console.log(err);
		})
		//send request to server.
	}
};

export const submitTodo = () => {
	return (dispatch, getState) => {
		const {todoInputValue} = getState();
		if (todoInputValue.length < 3) return false;

		sendPost('/todo/create', {value: todoInputValue}).then(res => {
			if (res.data.status === true) {
				dispatch(fetchAllTodoList());
				dispatch(todoInputChange({prop: 'todoInputValue', value: ''}))
			}
		})
	}
};

