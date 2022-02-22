import React from 'react';
import PropTypes from 'prop-types';
import auth from '../../redux/reducers/auth';
import { connect } from 'react-redux';
import { useState } from 'react';
import ThreadView from './ThreadView';
import { post } from '../../utils/api';
import { setMessages } from '../../redux/actions/message';
import { useEffect } from 'react';
import moment from 'moment';

const Thread = ({
	image,
	subject,
	body,
	users,
	authUser,
	thread,
	index,
	setMessages,
	lastMessage,
	unread,
}) => {
	const [expanded, setExpanded] = useState(false);
	const notAuthUser =
		authUser && users.find((user) => user._id !== authUser._id);

	const handleRead = async () => {
		try {
			const authRequired = true;
			const res = await post(
				'/api/data/message/read',
				{ threadId: thread._id },
				authRequired
			);
			// setMessages(res.data.savedUser.threads);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className={`thread${expanded ? ' expanded' : ''}`}>
			<img src={image} alt='' className='nav-thumb' />
			<span>{`${notAuthUser.firstName} ${notAuthUser.lastName}`}</span>
			<span className='subject'>{subject}</span>
			<span
				className='message-text'
				onClick={() => {
					if (unread) handleRead();
					setExpanded(!expanded);
				}}>
				{lastMessage.text}
			</span>
			<span>{moment(lastMessage.createdAt).format('lll')}</span>
			{expanded && <ThreadView thread={thread} index={index} />}
		</div>
	);
};

Thread.propTypes = {};

const mapStateToProps = (state) => ({
	authUser: state.auth.user,
});

export default connect(mapStateToProps, { setMessages })(Thread);
