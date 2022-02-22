import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import ProfileDetail from '../pages/ProfileDetail';
import ProfileBrowse from '../pages/ProfileBrowse';
import PrivateRoute from '../components/routing/PrivateRoute';
import GigBrowse from '../pages/GigBrowse';
import GigDetail from '../pages/GigDetail';
import EventDetail from '../pages/EventDetail';
import EventBrowse from '../pages/EventBrowse';
import Connections from '../pages/Connections';
import Notifications from '../pages/Notifications';
import Following from '../pages/Following';
import Discover from '../pages/Discover';
import EditProfile from '../pages/EditProfile';
import MessageBoard from '../pages/MessageBoard';
import WithUserDash from './WithUserDash';
// import ProfileShow from '../pages/ProfileShow';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Landing} />
			<WithUserDash path='/home' component={Home} />
			<Route path='/profile/:id' component={ProfileDetail} />
			<WithUserDash path='/connections' component={Connections} />
			{/* <WithUserDash exact path='/event' component={EventBrowse} /> */}
			<WithUserDash path='/event/:id' component={EventDetail} />
			{/* <Route path='/dashboard/notifications' component={Notifications} /> */}
			{/* <Route path='/dashboard/following' component={Following} /> */}
			<WithUserDash path='/user' component={Discover} />
			<WithUserDash path='/settings' component={EditProfile} />
			<Route path='/browse-profile' component={ProfileBrowse} />
			<WithUserDash path='/messages' component={MessageBoard} />
			{/* <Route path='/browse-profile/:id' component={ProfileShow} /> */}
			<WithUserDash exact path='/gig' component={GigBrowse} />
			<WithUserDash path='/gig/:id' component={GigDetail} />
			<Route path='*' component={Landing} />
		</Switch>
	);
};

export default Routes;
