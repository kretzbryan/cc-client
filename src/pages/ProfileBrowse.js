import React from 'react';
import ProfileColumn from '../components/profile/ProfileColumn';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
const Browse = () => (
	<>
		<ProfileColumn />
	</>
);

export default redirectHOC(requireAuth(Browse));
