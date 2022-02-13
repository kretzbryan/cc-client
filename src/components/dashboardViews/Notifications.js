import React from 'react';
import { connect } from 'react-redux';
import Notification from '../notifications/Notification';

const Notifications = ({ user }) => {
	let { notifications } = user;
	console.log('notifications', notifications);
	return (
		<div className='notifications'>
			{notifications &&
				notifications.new.map((notification) => {
					return <Notification />;
				})}
		</div>
	);
};

Notifications.propTypes = {};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(Notifications);
