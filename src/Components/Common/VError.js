import React from 'react';
import PropTypes from 'prop-types'

const VError = ({error, name}) => {
	if (Object.keys(error).length > 0 && error[name] !== undefined)
		return <div className={'error'}>
			{error[name]}
		</div>;
	return null;
};

VError.propTypes = {
	error: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired
};

export {VError};