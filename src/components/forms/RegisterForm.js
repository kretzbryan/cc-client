import React, { Fragment, useEffect, useState } from 'react';
import { register } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authFormHOC from '../hoc/AuthForm';
import AuthFormGroup from './AuthFormGroup';

const RegisterForm = ({
	register,
	show,
	toggle,
	returnError,
	handleChange,
	handlePasswordStatus,
	setErrorFields,
	setFormData,
	formData,
	handleSamePassword,
	canBeSubmitted,
}) => {
	console.log(formData);

	// const onChange = (e) => {
	// 	e.preventDefault();
	// 	setData({
	// 		...data,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	const onSubmit = (e) => {
		e.preventDefault();
		if (canBeSubmitted()) {
			register(formData);
		}
	};
	useEffect(() => {
		setErrorFields({
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: '',
			password2: '',
		});
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: '',
			password2: '',
		});
	}, []);

	return formData ? (
		<Fragment>
			<form
				onSubmit={onSubmit}
				method='POST'
				className={`form register-form${toggle()}`}
				autoComplete='off'>
				<h2 className='form-title'>Sign Up</h2>
				<AuthFormGroup
					alert={returnError('firstName')}
					handleChange={handleChange}
					name='firstName'
					label='First Name'
					className='first-name'
				/>
				<AuthFormGroup
					alert={returnError('lastName')}
					handleChange={handleChange}
					name='lastName'
					label='Last Name'
					className='last-name'
				/>
				<AuthFormGroup
					alert={!formData.email ? returnError('email') : null}
					handleChange={handleChange}
					name='email'
					label={
						formData.email && returnError('email')
							? returnError('email')
							: 'Email'
					}
					className='email'
				/>
				<AuthFormGroup
					alert={returnError('username')}
					handleChange={handleChange}
					name='username'
					label={'Username'}
					className='username'
				/>

				<AuthFormGroup
					alert={returnError('password')}
					handleChange={handleChange}
					name='password'
					label={
						formData.password
							? handlePasswordStatus(formData.password)
							: 'Password*'
					}
					className='password'
					// status={handlePasswordStatus(formData.password)}
				/>
				<AuthFormGroup
					alert={returnError('password2')}
					handleChange={handleChange}
					name='password2'
					label={
						formData.password2
							? handleSamePassword(formData.password, formData.password2)
							: 'Re-Type Password'
					}
					className='password2'
					// status={handleSamePassword(formData.password, formData.password2)}
				/>
				<button
					type='submit'
					className={`btn btn-primary register-form__button`}>
					Register
				</button>
				<footer className='auth-footer'>
					<span>
						*Password must be at least 8 characters, one Uppercase, one
						lowercase, one number, and one special character.
					</span>
					<div>
						already have an account?{' '}
						<a href='#' onClick={show}>
							Sign in
						</a>
					</div>
				</footer>
			</form>
		</Fragment>
	) : null;
};

RegisterForm.propTypes = {
	register: PropTypes.func.isRequired,
};

export default connect(null, { register })(authFormHOC(RegisterForm));
