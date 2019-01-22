import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import {fetchSingleTodoList} from './../../store/actions';
import {connect} from "react-redux";

class TodoSingle extends Component {
	selectedTodoItems() {
		const {todoItems, match} = this.props;
		if (!todoItems || !match.params.id) return null;

		const selectedTodoItems = _.filter(todoItems, ['id', parseInt(match.params.id)]);

		if (selectedTodoItems.length > 0) return selectedTodoItems[0];

		return null;
	}

	componentDidMount() {
		const {match} = this.props;
		this.props.fetchSingleTodoList(match.params.id);
	}


	render() {
		return <div className={'todo-container'}><h1>{this.props.selected.todo}</h1></div>
	}
}


const mapStateToProps = state => {
	return {
		selected: state.selected
	}
};

export default connect(mapStateToProps, {fetchSingleTodoList})(withRouter(TodoSingle));