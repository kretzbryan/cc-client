import React, { Fragment, useState } from 'react';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RegisterForm = ({ register, show, toggle }) => {
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		password2: '',
	});

	const onChange = (e) => {
		e.preventDefault();
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		register(data);
	};

	return (
		<Fragment>
			<form
				onSubmit={onSubmit}
				method='POST'
				className={`form register-form${toggle()}`}
				autoComplete='off'>
				<h2 className='form-title'>Sign Up</h2>
				<div className='register-form__group form__group first-name'>
					<input
						type='text'
						placeholder='First Name'
						name='firstName'
						className={'form__input register-form__input'}
						onChange={onChange}
					/>
					<label
						htmlFor='firstName'
						className={'form__label register-form__label'}>
						First Name
					</label>
				</div>
				<div className='register-form__group form__group last-name'>
					<input
						type='text'
						placeholder='Last Name'
						name='lastName'
						className={'form__input register-form__input'}
						onChange={onChange}
					/>
					<label
						htmlFor='lastName'
						className={'form__label register-form__label'}>
						Last Name
					</label>
				</div>
				<div className='register-form__group form__group email'>
					<input
						type='text'
						placeholder='Email'
						name='email'
						className={'form__input register-form__input'}
						onChange={onChange}
					/>
					<label htmlFor='email' className={'form__label register-form__label'}>
						Email
					</label>
				</div>
				<div className='register-form__group form__group username'>
					<input
						type='text'
						placeholder='Username'
						name='username'
						className={'form__input register-form__input'}
						onChange={onChange}
					/>
					<label
						htmlFor='username'
						className={'form__label register-form__label'}>
						Username
					</label>
				</div>
				<div className='register-form__group form__group password'>
					<input
						type='text'
						placeholder='Password'
						name='password'
						className={'form__input register-form__input'}
						onChange={onChange}
					/>
					<label
						htmlFor='password'
						className={'form__label register-form__label'}>
						Password
					</label>
				</div>
				<div className='register-form__group form__group password2'>
					<input
						type='text'
						placeholder='Re-Type Password'
						name='password2'
						className={'form__input register-form__input'}
						onChange={onChange}
					/>
					<label
						htmlFor='password2'
						className={'form__label register-form__label'}>
						Re-Type Password
					</label>
				</div>
				<button
					type='submit'
					className={`btn btn-primary register-form__button`}>
					Register
				</button>
				<footer className='auth-footer'>
					already have an account?{' '}
					<a href='#' onClick={show}>
						Sign in
					</a>
				</footer>
			</form>
		</Fragment>
	);
};

RegisterForm.propTypes = {
	register: PropTypes.func.isRequired,
};

export default connect(null, { register })(RegisterForm);
