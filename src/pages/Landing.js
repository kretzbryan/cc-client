import React, { useEffect } from 'react';
import { setLogin } from '../redux/actions/form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import About from '../components/landing/About';
import Alert from '../components/forms/Alert';
import Popup from '../components/layout/Popup';
import Photo from '../components/landing/Photo';
import AuthFormContainer from '../components/forms/AuthFormContainer';
import redirectHOC from '../components/hoc/RedirectHOC';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Landing = ({ setLogin }) => {
	if (localStorage.getItem('authToken')) {
		return <Redirect to='/home' />;
	}
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

export default connect(null, { setLogin })(redirectHOC(Landing));
