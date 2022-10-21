import React from 'react';
import PropTypes from 'prop-types';

const AuthFormGroup = ({
	alert,
	handleChange,
	name,
	label,
	status,
	className,
	type,
}) => {
	console.log('');
	return (
		<div
			className={`register-form__group form__group${
				className ? ` ${className}` : ''
			}`}>
			<input
				type={type}
				placeholder={label}
				name={name}
				className={'form__input register-form__input'}
				onChange={handleChange}
			/>
			<label htmlFor='username' className={'form__label register-form__label'}>
				{label}
			</label>
			{alert}
			{status}
		</div>
	);
};

AuthFormGroup.propTypes = {};

export default AuthFormGroup;
