import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ image, user }) => {
	return (
		<div className={`thread`}>
			<img src={image && image} alt='' className='nav-thumb' />
			<span>{user && `${user.firstName} ${user.lastName}`}</span>
			<span className='subject'>{/* {subject} */}</span>
			<span className='message-text'>{/* {body} */}</span>
		</div>
	);
};

Notification.propTypes = {};

export default Notification;
