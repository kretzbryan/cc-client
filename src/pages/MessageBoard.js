import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
import MessageThreadContainer from '../components/message/MessageThreadContainer';

const MessageBoard = (props) => {
	return (
		<div className='message'>
			<MessageThreadContainer />
		</div>
	);
};

MessageBoard.propTypes = {};

export default redirectHOC(requireAuth(MessageBoard));
