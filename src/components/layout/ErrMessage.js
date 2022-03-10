import React from 'react';
import PropTypes from 'prop-types';

const ErrMessage = ({ text, inline }) => {
	return (
		<div
			style={inline ? { display: 'inline', marginLeft: '1rem' } : {}}
			className='error-message'>
			{text}
		</div>
	);
};

ErrMessage.propTypes = {};

export default ErrMessage;
