import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import UserCard from '../components/user/UserCard';
import UserCardMobile from '../components/user/UserCardMobile';
import GigNav2 from '../components/gig/GigNav2';
import MessageThreadContainer from '../components/message/MessageThreadContainer';

const MessageBoard = (props) => {
	return (
		<div className='message'>
			<GigNav2 />
			<UserCardMobile />
			<MessageThreadContainer />
		</div>
	);
};

MessageBoard.propTypes = {};

export default redirectHOC(requireAuth(MessageBoard));
