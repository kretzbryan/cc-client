import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../images/default.png';
import Message from './Message';
import { connect } from 'react-redux';
import sendImage from '../../images/noun-send-1342298-2054A8.svg';
import { useState } from 'react';
import { sendMessage } from '../../redux/actions/message';
import { useEffect } from 'react';

const ThreadView = ({ thread, authUser, index, sendMessage }) => {
	const bottomRef = useRef(null);
	const [messageText, setMessageText] = useState('');
	const isCreator = (message) => {
		if (authUser && authUser._id === message.createdBy._id) return true;
		else return false;
	};

	const handleSubmit = () => {
		const threadId = thread._id;
		const message = {
			text: messageText,
			createdBy: authUser,
		};
		if (messageText) sendMessage({ threadId, message });
		setMessageText('');
	};

	useEffect(() => {
		bottomRef.current.scrollIntoView();
	});
	return (
		<div className='thread-view'>
			{/* <section>
				<button className='user-button'>
					<img src={defaultImage} alt='' className='nav-thumb' />
					<span>User Name</span>
				</button>
			</section> */}
			<header>
				<img src={defaultImage} alt='' className='nav-thumb' />
				<span>Re: Test Subject</span>
			</header>
			<div className='main'>
				<div className='message-body__container'>
					{thread.messages.map((message) => {
						return <Message message={message} creator={isCreator(message)} />;
					})}
					<div style={{ float: 'left', clear: 'both' }} ref={bottomRef}></div>
				</div>
				<footer>
					<textarea
						name='name'
						onChange={(e) => setMessageText(e.target.value)}
						value={messageText}></textarea>{' '}
					<button onClick={handleSubmit}>
						<img src={sendImage} alt='' />
					</button>
				</footer>
			</div>
		</div>
	);
};

ThreadView.propTypes = {};

const mapStateToProps = (state) => ({
	authUser: state.auth.user,
});

export default connect(mapStateToProps, { sendMessage })(ThreadView);
