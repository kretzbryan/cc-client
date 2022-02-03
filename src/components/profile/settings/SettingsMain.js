import React from 'react';
import PropTypes from 'prop-types';
import GeneralSettings from './GeneralSettings';

const SettingsMain = ({ window }) => {
	const returnWindow = () => {
		if (window === 'general') {
			return <GeneralSettings />;
		}
	};
	return returnWindow();
};

SettingsMain.propTypes = {};

export default SettingsMain;
