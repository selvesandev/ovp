import React from 'react';
import PropTypes from 'prop-types';

const AppInput = ({inputValue, onInputChangeProps, placeholder = '', type = 'text'}) => {
	return (<input value={inputValue} onChange={onInputChangeProps} autoFocus
				   type={type} className={'to-do-input'}
				   placeholder={placeholder}/>)
};

AppInput.propTypes = {
	inputValue: PropTypes.string.isRequired,
	onInputChangeProps: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string
};


export {AppInput};