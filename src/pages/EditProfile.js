import React, { useEffect, useState } from 'react';
import GigNav2 from '../components/gig/GigNav2';

import UserCardMobile from '../components/user/UserCardMobile';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import MediaCard from '../components/MediaCard';
import SettingsMain from '../components/profile/settings/SettingsMain';
import SettingsSubnav from '../components/profile/settings/SettingsSubnav';
const EditProfile = (props) => {
	const [window, setWindow] = useState('general');
	return (
		<div className='row main__container'>
			<section className='settings-container'>
				<UserCardMobile />
				<SettingsSubnav window={window} />
				<SettingsMain window={window} />
			</section>
		</div>
	);
};

EditProfile.propTypes = {};

export default EditProfile;
