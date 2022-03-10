import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import { Redirect } from 'react-router-dom';
import { setError } from '../../redux/actions/alert';
import ErrMessage from '../layout/ErrMessage';

const LoginForm = ({ login, isAuthenticated, show, toggle }) => {
	const [loginError, setLoginError] = useState('');
	const [data, setData] = useState({
		username: '',
		password: '',
	});

	const onChange = (e) => {
		e.preventDefault();
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		console.log('Submitted');
		e.preventDefault();
		const res = await login(data);
		if (!res) {
			setLoginError('Username or password incorrect');
		}
	};

	if (isAuthenticated) {
		return <Redirect to='/home' />;
	}

	return (
		<Fragment>
			<form
				onSubmit={onSubmit}
				className={`form login-form${toggle()}`}
				autoComplete='off'>
				<h2 className='form-title'>Sign In</h2>
				{loginError && <ErrMessage text={loginError} />}
				<div className='login-form__group form__group'>
					<input
						type='text'
						placeholder='Username'
						name='username'
						className={'form__input login-form__input'}
						onChange={onChange}
					/>
					<label htmlFor='username' className={'form__label login-form__label'}>
						Username
					</label>
				</div>
				<div className='login-form__group form__group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						className={'form__input login-form__input'}
						onChange={onChange}
					/>
					<label htmlFor='password' className={'form__label login-form__label'}>
						Password
					</label>
				</div>
				<button type='submit' className={`btn btn-primary login-form__button`}>
					Login
				</button>
				<footer className='auth-footer'>
					Don't have an account?{' '}
					<a href='#' onClick={show}>
						Sign up
					</a>
				</footer>
			</form>
		</Fragment>
	);
};

LoginForm.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(null, { login })(LoginForm);
