import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {fetchSingleTodoList, todoInputChange, saveDetails} from './../../store/actions';
import {connect} from "react-redux";
import {TodoDetails} from "../Common";
import {AuthHOC} from "../HOC/AuthHOC";

class TodoSingle extends Component {

	componentDidMount() {
		const {match} = this.props;
		this.props.fetchSingleTodoList(match.params.id);
	}


	render() {
		if (Object.keys(this.props.selected).length > 0)
			return <div className={'todo-container'}>
				<h1>{this.props.selected.todo}</h1>


				<TodoDetails submit={this.props.saveDetails}
							 value={this.props.inputValue}
							 inputChange={this.props.todoInputChange}
							 selected={this.props.selected}/>

			</div>;
		else
			return null;
	}
}


const mapStateToProps = state => {
	return {
		selected: state.todo.selected,
		inputValue: state.todo.todoDetailValue
	}
};

export default connect(mapStateToProps, {
	fetchSingleTodoList,
	todoInputChange,
	saveDetails
})(withRouter(AuthHOC(TodoSingle)));