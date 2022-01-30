import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ login, isAuthenticated, show, toggle }) => {
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

	const onSubmit = (e) => {
		e.preventDefault();
		login(data);
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
						type='text'
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
