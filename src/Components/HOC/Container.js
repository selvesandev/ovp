import React from 'react';

const Container = (props) => {
	return <div className={'todo-container'}>{props.children}</div>
};

export {Container}