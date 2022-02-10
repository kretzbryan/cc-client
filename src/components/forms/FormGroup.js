import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({
	inputValue,
	inputName,
	classNames,
	label,
	handleInputChange,
	inputType,
	handleAutoFill,
}) => {
	const returnInput = () => {
		if (inputType === 'text-area') {
			return (
				<textarea
					name={inputName}
					value={inputValue}
					onChange={handleInputChange}></textarea>
			);
		} else {
			return (
				<input
					type={inputType}
					name={inputName}
					value={inputValue}
					className={'form__input'}
					onChange={handleInputChange}
				/>
			);
		}
	};

	return (
		<div className={`form__group${classNames ? ` ${classNames}` : ''}`}>
			<label htmlFor={inputName} className={'form__label'}>
				{label}:
			</label>
			{returnInput()}
			{handleAutoFill && (
				<div className='autofill-container'>{handleAutoFill()}</div>
			)}
		</div>
	);
};

FormGroup.propTypes = {};

export default FormGroup;
