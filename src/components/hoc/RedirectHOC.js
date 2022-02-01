import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../../redux/actions/auth';
import { removeRedirect, setRedirect } from '../../redux/actions/redirect';

const redirectHOC = (WrappedComponent) => {
	const RedirectHOC = ({
		pathname,
		// setRedirect,
		removeRedirect,
		location,
		...props
	}) => {
		useEffect(() => {
			if (location.pathname === pathname) removeRedirect();
		}, [location.pathname, pathname, removeRedirect]);

		if (pathname) return <Redirect to={pathname} />;

		return <WrappedComponent {...props} />;
	};

	const mapStateToProps = (state) => ({
		pathname: state.redirect.pathname,
	});

	return connect(mapStateToProps, {
		// setRedirect,
		removeRedirect,
	})(RedirectHOC);
};

export default redirectHOC;
