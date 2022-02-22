import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DiscoverSubnav from '../components/discover/DiscoverSubnav';
import DiscoverMain from '../components/discover/DiscoverMain';

const Discover = (props) => {
	const [window, setWindow] = useState('people');
	const searchAction = () => {
		if (window === 'people') {
			return () => null;
		}
	};
	return (
		<>
			<DiscoverSubnav window={window} setWindow={setWindow} />
			{/* <ToolBar type='general' /> */}
			<DiscoverMain window={window} />
		</>
	);
};

Discover.propTypes = {};

export default redirectHOC(requireAuth(Discover));
