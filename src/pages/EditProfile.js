import React, { useEffect, useState } from 'react';
import SettingsMain from '../components/profile/settings/SettingsMain';
import SettingsSubnav from '../components/profile/settings/SettingsSubnav';

const EditProfile = (props) => {
	const [window, setWindow] = useState('general');
	return (
		<>
			<SettingsSubnav window={window} />
			<SettingsMain window={window} />
		</>
	);
};
EditProfile.propTypes = {};

export default EditProfile;
