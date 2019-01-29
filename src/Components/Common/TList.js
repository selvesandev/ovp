import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const TList = ({todoItem, onDelete}) => {
	const {id, todo} = todoItem;
	return (<div className="list-item">
		<Link to={'/todo/' + id}>{todo}</Link>
		<div className="remove"><a href="/" onClick={(e) => {
			e.preventDefault();
			confirmAlert({
				title: 'Are you sure?',
				message: 'Once deleted won\'t be recoverable in future.',
				buttons: [
					{
						label: 'Yes',
						onClick: () => onDelete(id)
					}
				]
			})
		}}><i className={'fas fa-trash-alt'}/></a></div>
		<div className="view"><a href="/"><i className={'fas fa-eye'}/></a></div>
	</div>);
};

TList.propTypes = {
	todoItem: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired
};

export {TList};