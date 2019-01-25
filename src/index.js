import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './Style/css/index.css'
import App from './App';
import reducer from './store/reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';


const logger = (store) => {
	return (next) => {
		return action => {
			// console.log('[MIDDLEWARE] Dispatching', action, store.getState());
			const result = next(action);
			// console.log('[MIDDLEWARE] Dispatched', store.getState());
			return result;
		}
	}
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const initialStore = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));
const app = (<BrowserRouter><Provider store={initialStore}><App/></Provider></BrowserRouter>);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
