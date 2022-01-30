import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserDashboard } from '../actions/profile';
import { getPosts } from '../actions/post';

import Popup from '../components/layout/Popup';

import PostColumn from '../components/post/PostColumn';

import GigNav2 from '../components/gig/GigNav2';
import GigNav1 from '../components/gig/GigNav1';

import UserCardMobile from '../components/user/UserCardMobile';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import MediaCard from '../components/MediaCard';

const Home = ({ getUserDashboard, getGigs, getPosts, auth, profile }) => {
	useEffect(() => {
		getUserDashboard();
		getPosts();
	}, []);

	return (
		<div className='row main__container'>
			<section className='column-secondary'>
				<UserCard />
				<DashboardNav />
				<GigNav2 />
			</section>
			<section className='column-primary'>
				<UserCardMobile />
				<PostColumn />
			</section>
			<section className='column-tertiary'>
				<MediaCard />
			</section>
		</div>
	);
};

Home.propTypes = {
	getUserDashboard: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getUserDashboard, getPosts })(Home);
