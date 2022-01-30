import React, { useState } from 'react';
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';

const AuthFormContainer = () => {
	const [toggle, setToggle] = useState('login');

	const showRegister = () => {
		setToggle('register');
	};
	const showLogin = () => {
		setToggle('login');
	};

	const toggleRegister = () => {
		return toggle === 'register' ? '-show' : '';
	};
	const toggleLogin = () => {
		return toggle === 'login' ? '-show' : '';
	};

	return (
		<div className='landing-form__container'>
			<RegisterForm show={showLogin} toggle={toggleRegister} />
			<LoginForm show={showRegister} toggle={toggleLogin} />
		</div>
	);
};

export default AuthFormContainer;
