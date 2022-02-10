import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { getRecentGigs } from '../redux/actions/gig';
import { connect } from 'react-redux';
import auth from '../redux/reducers/auth';
import UserCard from '../components/user/UserCard';
import GigColumn from '../components/gig/GigColumn';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
import DashboardNav from '../components/user/dashboard/DashboardNav';

const GigBrowse = ({ getRecentGigs, authLoading, user }) => {
	useEffect(() => {
		getRecentGigs();
	}, []);

	return (
		<div className='row main__container'>
			<div className='column-secondary'>
				{!authLoading && <UserCard />}
				<DashboardNav />
			</div>
			<div className='column-primary'>
				<GigColumn />
			</div>
			{/* <div className="column-tertiary">
            </div> */}
		</div>
	);
};

GigBrowse.propTypes = {
	getRecentGigs: PropTypes.func.isRequired,
	authLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	authLoading: state.auth.loading,
	user: auth.user,
});

export default connect(mapStateToProps, { getRecentGigs })(
	redirectHOC(requireAuth(GigBrowse))
);
