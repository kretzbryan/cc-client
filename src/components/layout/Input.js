import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ cnames, label, labelText, type, value, placeholder }) => {
	return (
		<div className={`input__section ${cnames}`}>
			<label htmlFor={label}>{labelText}</label>
			<input type={type} placeholder={placeholder} />
		</div>
	);
};

Input.propTypes = {};

export default Input;
