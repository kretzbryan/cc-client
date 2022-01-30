import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import GigNav2 from '../components/gig/GigNav2';
import UserCardMobile from '../components/user/UserCardMobile';

const Notifications = (props) => {
	return (
		<div>
			<div>
				<div className='row main__container'>
					<section className='column-secondary'>
						<UserCard />
						<DashboardNav />
						<GigNav2 />
					</section>
					<section className='event__browse-container'>
						<UserCardMobile />
					</section>
				</div>
			</div>
		</div>
	);
};

Notifications.propTypes = {};

export default Notifications;
