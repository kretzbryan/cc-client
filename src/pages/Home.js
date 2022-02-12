import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPosts } from '../redux/actions/post';

import PostColumn from '../components/post/PostColumn';

import GigNav2 from '../components/gig/GigNav2';

import UserCardMobile from '../components/user/UserCardMobile';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import MediaCard from '../components/MediaCard';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
import { loadUser } from '../redux/actions/auth';
import { useState } from 'react';
import Connections from '../components/dashboardViews/Connections';
import Discover from '../components/dashboardViews/Discover';
import EditProfile from '../components/dashboardViews/EditProfile';
import EventBrowse from '../components/dashboardViews/EventBrowse';
import Following from '../components/dashboardViews/Following';
import GigBrowse from '../components/dashboardViews/GigBrowse';
import MessageBoard from '../components/dashboardViews/MessageBoard';
import Notifications from '../components/dashboardViews/Notifications';
import ProfileBrowse from '../components/dashboardViews/ProfileBrowse';

const Home = ({ loadUser, getGigs, getPosts, auth, profile, feed }) => {
	const [currentWindow, setCurrentWindow] = useState('feed');

	const handleWindow = () => {
		if (currentWindow === 'feed') return <PostColumn items={feed} />;
		if (currentWindow === 'connections') return <Connections />;
		if (currentWindow === 'discover') return <Discover />;
		if (currentWindow === 'edit-profile') return <EditProfile />;
		if (currentWindow === 'event-browse') return <EventBrowse />;
		if (currentWindow === 'following') return <Following />;
		if (currentWindow === 'gig-browse') return <GigBrowse />;
		if (currentWindow === 'message-board') return <MessageBoard />;
		if (currentWindow === 'notifications') return <Notifications />;
		if (currentWindow === 'profile-browse') return <ProfileBrowse />;
	};

	useEffect(() => {
		loadUser();
	}, []);

	return (
		<div className='row main__container'>
			<section className='column-secondary'>
				<UserCard />
				<DashboardNav setCurrentWindow={setCurrentWindow} />
			</section>
			<section className='column-primary'>
				<UserCardMobile />
				{handleWindow()}
				{/* <MediaCard /> */}
			</section>
		</div>
	);
};

Home.propTypes = {
	loadUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
	feed: state.feed.feed,
});

export default connect(mapStateToProps, { loadUser, getPosts })(
	redirectHOC(requireAuth(Home))
);
