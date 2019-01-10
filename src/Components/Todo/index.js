import React, {Component} from 'react';
import {AppInput, TList} from './../../Components/Common';

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

	onInputChange(e) {
		this.setState({todoInputValue: e.target.value});
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
		const {todoListItems} = this.state;

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


	render() {
		return (<div className={'todo-container'}>
			<div className="input-container">
				<form onSubmit={this.onSubmitNote}>
					<AppInput placeholder={'Enter your note here..'} onInputChangeProps={this.onInputChange}
							  inputValue={this.state.todoInputValue}/>
				</form>
			</div>

			<div className="todo-list-container">
				{this.renderListItemsJSX()}
			</div>

			{this.state.todoListItems.length > 3 && <button className={'load-more-button'}>View More.</button>}


		</div>);
	}
}

export default Todo;