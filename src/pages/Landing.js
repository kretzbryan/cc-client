import React, { useEffect } from 'react';
import { setLogin } from '../actions/form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import About from '../components/landing/About';
import Alert from '../components/forms/Alert';
import Popup from '../components/layout/Popup';
import Photo from '../components/landing/Photo';
import Form from '../components/forms/Form';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import AuthFormContainer from '../components/forms/AuthFormContainer';

const Landing = ({ setLogin }) => {
	useEffect(() => {
		setLogin();
	}, []);

	return (
		<div className='landing__container'>
			<AuthFormContainer />
			<Photo />
			<About />
			<Alert />
			<Popup />
		</div>
	);
};

Landing.propTypes = {
	setLogin: PropTypes.func.isRequired,
};

export default connect(null, { setLogin })(Landing);
