import React from 'react';
import PropTypes from 'prop-types';

import defaultImage from '../../images/default.png';
import Thread from './Thread';
import { connect } from 'react-redux';
import { CHECK_UNIQUE_USER_FIELD } from '../../redux/actions/types';

const MessageThreadContainer = ({ unreadMessages, readMessages }) => {
	return (
		<div className='message-thread__container'>
			{unreadMessages && unreadMessages.length
				? unreadMessages.map((thread, index) => {
						return (
							<Thread
								unread={true}
								index={index}
								thread={thread}
								image={defaultImage}
								users={thread.users}
								subject={thread.subject}
								lastMessage={thread.messages[thread.messages.length - 1]}
								body={thread.messages[thread.messages.length - 1].text}
							/>
						);
				  })
				: null}

			{readMessages && readMessages.length
				? readMessages.map((thread, index) => {
						return (
							<Thread
								unread={false}
								index={index}
								thread={thread}
								image={defaultImage}
								users={thread.users}
								subject={thread.subject}
								lastMessage={thread.messages[thread.messages.length - 1]}
								body={thread.messages[thread.messages.length - 1].text}
							/>
						);
				  })
				: null}
		</div>
	);
};

MessageThreadContainer.propTypes = {};

const mapStateToProps = (state) => ({
	unreadMessages: state.message.unreadMessages,
	readMessages: state.message.readMessages,
});

export default connect(mapStateToProps, null)(MessageThreadContainer);
