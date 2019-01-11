import React, {Component} from 'react';
import './Style/scss/style.scss'
import Todo from "./Components/Todo";
import {Route, Switch} from 'react-router-dom';
import TodoSingle from "./Components/Todo/TodoSingle";
import {NotFound} from "./Components/Error";

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
				<Switch>
					<Route path={'/'} exact
						   render={(props) => (<Todo onTodoUpdated={this.onTodoUpdated}/>)}/>
					<Route path={'/todo'} exact
						   render={(props) => (<Todo onTodoUpdated={this.onTodoUpdated}/>)}/>
					<Route path={'/todo/:id([0-9]*)'} exact
						   render={() => (<TodoSingle todoItems={this.state.todoItems}/>)}/>
					<Route component={NotFound}/>
					{/*<Route path={'/'} exact*/}
					{/*render={(props) => (<Todo {...props} onTodoUpdated={this.onTodoUpdated}/>)}/>*/}
					{/*<Route path={'/todo'} exact*/}
					{/*render={(props) => (<Todo {...props} onTodoUpdated={this.onTodoUpdated}/>)}/>*/}
					{/*<Route component={NotFound}/>*/}
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
