import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';

const MessageBoard = (props) => {
	return <div></div>;
};

MessageBoard.propTypes = {};

export default redirectHOC(requireAuth(MessageBoard));
