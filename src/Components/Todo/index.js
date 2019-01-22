import React, {Component} from 'react';
import {AppInput, TList} from './../../Components/Common';
import {connect} from "react-redux";
import {todoInputChange, fetchAllTodoList, submitTodo} from '../../store/actions'
import Loader from 'react-loader';

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
		const todoListItems = this.props.list;

		if (todoListItems.length < 1 && this.props.loaded === true) return <h3>No todo list created yet...</h3>;

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

				<Loader loaded={this.props.loaded}></Loader>
			</div>

			{this.state.todoListItems.length > 3 && <button className={'load-more-button'}>View More.</button>}


		</div>);
	}
}

const mapStateToProps = state => {
	return {
		inputValue: state.todoInputValue,
		list: state.todoListItems,
		loaded: state.loaded
	}
};


export default connect(mapStateToProps, {todoInputChange, fetchAllTodoList, submitTodo})(Todo);