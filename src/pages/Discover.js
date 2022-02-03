import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import GigNav2 from '../components/gig/GigNav2';
import UserCardMobile from '../components/user/UserCardMobile';
import ToolBar from '../components/event/ToolBar';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
import DiscoverSubnav from '../components/discover/DiscoverSubnav';
import DiscoverMain from '../components/discover/DiscoverMain';

const Discover = (props) => {
	const [window, setWindow] = useState('people');
	const searchAction = () => {
		if (window === 'people') {
			return () => null;
		}
	};
	return (
		<div className='row main__container'>
			<section className='column-secondary'>
				<UserCard />
				<DashboardNav />
				<GigNav2 />
			</section>
			<section className='event__browse-container'>
				<DiscoverSubnav window={window} setWindow={setWindow} />
				{/* <ToolBar type='general' /> */}
				<DiscoverMain window={window} />
				<UserCardMobile />
			</section>
		</div>
	);
};

Discover.propTypes = {};

export default redirectHOC(requireAuth(Discover));
