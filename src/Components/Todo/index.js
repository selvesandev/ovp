import React, {Component} from 'react';
import {TList, AppInput} from './../../Components/Common';

class Todo extends Component {
	state = {
		todoInputValue: '',
		todoListItems: []
	};

	constructor(props) {
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmitNote = this.onSubmitNote.bind(this);
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
	}


	render() {
		return (<div className={'todo-container'}>
			<div className="input-container">
				<form onSubmit={this.onSubmitNote}>
					<input value={this.state.todoInputValue} onChange={this.onInputChange} autoFocus
						   type="text" className={'to-do-input'}
						   placeholder={'Enter your note here..'}/>
				</form>
			</div>

			<div className="todo-list-container">
				<TList/>
				<TList/>
				<TList/>
				<TList/>
			</div>

			<button className={'load-more-button'}>View More.</button>
			<AppInput/>
		</div>);
	}
}

export default Todo;