import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import {NotFound} from "../Error/NotFound";

class TodoSingle extends Component {
	selectedTodoItems() {
		const {todoItems, match} = this.props;
		if (!todoItems || !match.params.id) return null;

		const selectedTodoItems = _.filter(todoItems, ['id', parseInt(match.params.id)]);

		if (selectedTodoItems.length > 0) return selectedTodoItems[0];

		return null;
	}

	render() {
		const selectedTodoItems = this.selectedTodoItems();

		if (selectedTodoItems)
			return <div className={'todo-container'}><h1>{selectedTodoItems.value}</h1></div>
		else
			return <NotFound {...this.props}/>
	}
}

export default withRouter(TodoSingle);