import React, {Component} from 'react';
import {AppInput, TList} from './../../Components/Common';
import {connect} from "react-redux";
import {todoInputChange, fetchAllTodoList, submitTodo} from '../../store/actions'


class Todo extends Component {
	state = {
		todoInputValue: '',
		todoListItems: []
	};

	constructor(props) {
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmitNote = this.onSubmitNote.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}


	onSubmitNote(e) {
		e.preventDefault();
		let {todoInputValue, todoListItems} = this.state;

		if (todoInputValue.length < 5) return;

		todoListItems.push({id: todoListItems.length + 1, value: todoInputValue});
		this.setState({todoInputValue: ''});
		this.props.onTodoUpdated(this.state.todoListItems)
	}

	renderListItemsJSX() {
		const todoListItems = this.props.list;

		if (todoListItems.length < 1) return <h3>No todo list created yet...</h3>;

		return todoListItems.map((todoItem, i) => {
			return <TList onDelete={this.removeItem} key={i} todoItem={todoItem}/>
		})
	}


	removeItem(index) {

		const {todoListItems} = this.state;
		if (todoListItems[index - 1] === undefined) return false;

		todoListItems.splice(index - 1, 1);
		this.setState({todoListItems});
	}

	onInputChange(e) {
		this.setState({todoInputValue: e.target.value});
	}

	componentDidMount() {
		this.props.fetchAllTodoList();
	}

	render() {
		return (<div className={'todo-container'}>
			<div className="input-container">
				<form onSubmit={(e) => {
					e.preventDefault();
					this.props.submitTodo()
				}}>
					<AppInput placeholder={'Enter your note here..'}
							  onInputChangeProps={(e) => {
								  this.props.todoInputChange({prop: 'todoInputValue', value: e.target.value});
							  }}
							  inputValue={this.props.inputValue}/>
				</form>
			</div>

			<div className="todo-list-container">
				{this.renderListItemsJSX()}
			</div>

			{this.state.todoListItems.length > 3 && <button className={'load-more-button'}>View More.</button>}


		</div>);
	}
}

const mapStateToProps = state => {
	return {
		inputValue: state.todoInputValue,
		list: state.todoListItems
	}
};


export default connect(mapStateToProps, {todoInputChange, fetchAllTodoList, submitTodo})(Todo);