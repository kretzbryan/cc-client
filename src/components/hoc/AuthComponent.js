import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../../redux/actions/auth';
import { setRedirect } from '../../redux/actions/redirect';

let requireAuth = (WrappedComponent) => {
	const AuthenticatedComponent = ({
		pathname,
		setRedirect,
		logout,
		...props
	}) => {
		console.log(localStorage.getItem('authToken'));

		if (!localStorage.getItem('authToken')) {
			logout();
			return <Redirect to='/' />;
		}

		return <WrappedComponent {...props} />;
	};

	const mapStateToProps = (state) => ({
		pathname: state.redirect.pathname,
	});

	return connect(mapStateToProps, {
		setRedirect,
		logout,
	})(AuthenticatedComponent);
};

export default requireAuth;
