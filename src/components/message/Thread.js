import React from 'react';
import PropTypes from 'prop-types';
import auth from '../../redux/reducers/auth';
import { connect } from 'react-redux';
import { useState } from 'react';
import ThreadView from './ThreadView';

const Thread = ({ image, subject, body, users, authUser, thread }) => {
	const [expanded, setExpanded] = useState(false);
	const notAuthUser =
		authUser && users.find((user) => user._id !== authUser._id);
	console.log('subject', subject);
	console.log('body', body);
	console.log('notAuthUser', notAuthUser);
	return (
		<div className={`thread${expanded ? ' expanded' : ''}`}>
			<img src={image} alt='' className='nav-thumb' />
			<span>{`${notAuthUser.firstName} ${notAuthUser.lastName}`}</span>
			<span className='subject'>{subject}</span>
			<span className='message-text' onClick={() => setExpanded(!expanded)}>
				{body}
			</span>
			{expanded && <ThreadView thread={thread} />}
		</div>
	);
};

Thread.propTypes = {};

const mapStateToProps = (state) => ({
	authUser: state.auth.user,
});

export default connect(mapStateToProps, null)(Thread);
