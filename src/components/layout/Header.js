import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';
import React, { useState, Fragment } from 'react';
import { setLogin, setRegister, setAddGig } from '../../redux/actions/form';
import { useEffect } from 'react';
import { getUserProfile } from '../../redux/actions/profile';
import image from '../../images/default.png';

const Header = ({
	auth: { isAuthenticated, loading, user },
	logout,
	setLogin,
	setRegister,
	getUserProfile,
	setAddGig,
}) => {
	const authorized = (
		<Fragment>
			<h1 className='navbar-brand navbar-brand-authorized' href='#'>
				Cirque-Connections
			</h1>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<a className='nav-link' href='/home'>
						Home{' '}
					</a>
				</li>
				{!loading && !!user && (
					<li className='nav-item'>
						<a className='nav-link' href={`/profile/${user.user._id}`}>
							{' '}
							View Profile
						</a>
					</li>
				)}
				<li className='nav-item'>
					<a className='nav-link' href='/browse'>
						Browse Profiles
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='#gigForm' onClick={setAddGig}>
						Add Gig
					</a>
				</li>
				<li className='nav-item'>
					<a href='/' className='nav-link' onClick={logout}>
						Log Out
					</a>
				</li>
				<li className='nav-item'>
					<a href='/' className='nav-link'>
						<img src={image} alt='profile thumbnail' className='nav-thumb' />
					</a>
				</li>
			</ul>
		</Fragment>
	);

	const guest = (
		<Fragment>
			<h1 className='navbar-brand navbar-brand-guest' href='#'>
				Cirque-Connections
			</h1>
		</Fragment>
	);

	return (
		<Fragment>
			<nav className='navbar'>
				{isAuthenticated && !loading ? authorized : guest}
			</nav>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

Header.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	setLogin: PropTypes.func.isRequired,
	setRegister: PropTypes.func.isRequired,
	getUserProfile: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, {
	logout,
	setLogin,
	setRegister,
	getUserProfile,
	setAddGig,
})(Header);
