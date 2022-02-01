import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import GigNav2 from '../components/gig/GigNav2';
import UserCardMobile from '../components/user/UserCardMobile';
import ToolBar from '../components/event/ToolBar';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';

const Connections = (props) => {
	return (
		<div>
			<div className='row main__container'>
				<section className='column-secondary'>
					<UserCard />
					<DashboardNav />
					<GigNav2 />
				</section>
				<section className='event__browse-container'>
					<ToolBar type='friends' />
					<UserCardMobile />
				</section>
			</div>
		</div>
	);
};

Connections.propTypes = {};

export default redirectHOC(requireAuth(Connections));
