import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import UserCard from '../components/user/UserCard';
import UserCardMobile from '../components/user/UserCardMobile';
import GigNav2 from '../components/gig/GigNav2';

const MessageBoard = (props) => {
	return (
		<div className='row main__container'>
			<section className='column-secondary'>
				<UserCard />
				<DashboardNav />
				<GigNav2 />
			</section>
			<section className='column-primary'>
				<UserCardMobile />
			</section>
			<section className='column-tertiary'></section>
		</div>
	);
};

MessageBoard.propTypes = {};

export default redirectHOC(requireAuth(MessageBoard));
