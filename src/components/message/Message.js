import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, creator }) => {
	const { createdBy, text } = message;
	return (
		<div className={`message-body ${creator ? `right` : 'left'}`}>
			<h5 className={creator ? `right` : 'left'}>
				<span>
					{createdBy.firstName} {createdBy.lastName}
				</span>
			</h5>
			<p>{text}</p>
		</div>
	);
};

Message.propTypes = {};

export default Message;
