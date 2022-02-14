import React from 'react';
import PropTypes from 'prop-types';
import DiscoverPeople from './DiscoverPeople';

const DiscoverMain = ({ window }) => {
	const handleWindow = () => {
		if (window === 'people') {
			return <DiscoverPeople />;
		}
	};

	return <div className='discover-main'>{handleWindow()}</div>;
};

DiscoverMain.propTypes = {};

export default DiscoverMain;
