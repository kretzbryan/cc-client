import React from 'react';
import PropTypes from 'prop-types';
import MessageThreadContainer from '../message/MessageThreadContainer';

const MessageBoard = (props) => {
	return (
		<div className='message'>
			<MessageThreadContainer />
		</div>
	);
};

MessageBoard.propTypes = {};

export default MessageBoard;
