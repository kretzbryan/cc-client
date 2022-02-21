import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = ({ options, value, handleChange, name }) => {
	return (
		<select
			onChange={handleChange}
			name={name}
			value={value}
			className='form__input'>
			{options.map((option) => {
				return <option value={option}>{option}</option>;
			})}
		</select>
	);
};

SelectComponent.propTypes = {};

export default SelectComponent;
