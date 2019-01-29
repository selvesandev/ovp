import React, {Component} from 'react';
import {AppInput, TList, UserNav} from './../../Components/Common';
import {connect} from "react-redux";
import {todoInputChange, fetchAllTodoList, submitTodo, logout, removeTodo} from '../../store/actions'
import Loader from 'react-loader';
import {Container, AuthHOC} from "../HOC";

class Todo extends Component {
	state = {
		todoInputValue: '',
		todoListItems: []
	};

	constructor(props) {
		super(props);
		this.removeItem = this.removeItem.bind(this);

	}


	renderListItemsJSX() {
		const {todoListItems, loaded} = this.props.todo;

		if (todoListItems.length < 1 && loaded === true) return <h3>No todo list created yet...</h3>;

		return todoListItems.map((todoItem, i) => {
			return <TList onDelete={() => {
				this.props.removeTodo(todoItem.id)
			}} key={i} todoItem={todoItem}/>
		})
	}


	removeItem(index) {
		const {todoListItems} = this.state;
		if (todoListItems[index - 1] === undefined) return false;

		todoListItems.splice(index - 1, 1);
		this.setState({todoListItems});
	}

	componentDidMount() {
		this.props.fetchAllTodoList();
	}

	render() {
		const {todoInputValue, loaded} = this.props.todo;
		return (<Container>
			<UserNav logout={this.props.logout}/>
			<div className="input-container">
				<form onSubmit={(e) => {
					e.preventDefault();
					this.props.submitTodo()
				}}>
					<AppInput placeholder={'Enter your note here..'}
							  onInputChangeProps={(e) => {
								  this.props.todoInputChange({prop: 'todoInputValue', value: e.target.value});
							  }}
							  inputValue={todoInputValue}/>
				</form>
			</div>

			<div className="todo-list-container">
				{this.renderListItemsJSX()}

				<Loader loaded={loaded}/>
			</div>

			{this.state.todoListItems.length > 3 && <button className={'load-more-button'}>View More.</button>}
		</Container>);
	}
}

const mapStateToProps = state => {
	return {
		todo: state.todo
	}
};


export default connect(mapStateToProps, {
	todoInputChange,
	fetchAllTodoList,
	submitTodo,
	logout,
	removeTodo
})(AuthHOC(Todo));