const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
	counter: 0
};


const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC_COUNTER':
			state.counter += 1;
			return {
				...state
			};
		case 'INC_COUNTER_BY':
			state.counter += action.payload;
			return {
				...state
			};
		default:
			return state;
	}
	return state;
};

const store = createStore(counterReducer);

console.log(store.getState());


store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState());

store.dispatch({type: 'INC_COUNTER_BY', payload: 10});
console.log(store.getState());
