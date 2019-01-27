import React, {Component} from 'react';
import './Style/scss/style.scss'
import Todo from "./Components/Todo";
import {Route, Switch, Router} from 'react-router-dom';
import TodoSingle from "./Components/Todo/TodoSingle";
import {NotFound} from "./Components/Error";
import Login from "./Components/Auth/Login";
import history from './utils/history'

class App extends Component {
	state = {
		todoItems: null
	};

	constructor(props) {
		super(props);
		this.onTodoUpdated = this.onTodoUpdated.bind(this);
	}


	onTodoUpdated(todoItems) {
		this.setState({todoItems});
	}

	render() {
		return (
			<React.Fragment>
				<Router history={history}>
					<Switch>
						<Route path={'/'} exact
							   render={(props) => (<Todo onTodoUpdated={this.onTodoUpdated}/>)}/>
						<Route path={'/todo'} exact
							   render={(props) => (<Todo onTodoUpdated={this.onTodoUpdated}/>)}/>
						<Route path={'/todo/:id([0-9]*)'} exact
							   render={() => (<TodoSingle todoItems={this.state.todoItems}/>)}/>
						<Route path={'/login'} component={Login}/>
						<Route component={NotFound}/>
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
