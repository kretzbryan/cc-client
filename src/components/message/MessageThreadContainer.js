import React from 'react';
import PropTypes from 'prop-types';

import defaultImage from '../../images/default.png';
import Thread from './Thread';
import { connect } from 'react-redux';

const MessageThreadContainer = ({ messages }) => {
	return (
		<div className='message-thread__container'>
			{messages &&
				messages.map((thread) => {
					return (
						<Thread
							thread={thread}
							image={defaultImage}
							users={thread.users}
							subject={thread.subject}
							body={thread.messages[0].text}
						/>
					);
				})}
		</div>
	);
};

MessageThreadContainer.propTypes = {};

const mapStateToProps = (state) => ({
	messages: state.message.messages,
});

export default connect(mapStateToProps, null)(MessageThreadContainer);
