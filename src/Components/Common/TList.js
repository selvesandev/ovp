import React from 'react';

const TList = () => {
	return (<div className="list-item">
		Hello this is list
		<div className="remove"><a href=""><i className={'fas fa-trash-alt'}/></a></div>
		<div className="view"><a href=""><i className={'fas fa-eye'}/></a></div>
	</div>);
};

export {TList};