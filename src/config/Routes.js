import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import ProfileDetail from '../pages/ProfileDetail';
import ProfileBrowse from '../pages/ProfileBrowse';
import PrivateRoute from '../components/routing/PrivateRoute';
import GigBrowse from '../pages/GigBrowse';
import GigDetail from '../pages/GigDetail';
import EventBrowse from '../pages/EventBrowse';
import Connections from '../pages/Connections';
import Notifications from '../pages/Notifications';
import Following from '../pages/Following';
import Discover from '../pages/Discover';
import EditProfile from '../pages/EditProfile';
import MessageBoard from '../pages/MessageBoard';
// import ProfileShow from '../pages/ProfileShow';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Landing} />
			<Route path='/home' component={Home} />
			<Route path='/profile/:id' component={ProfileDetail} />
			<Route path='/dashboard/connections' component={Connections} />
			<Route path='/dashboard/events' component={EventBrowse} />
			<Route path='/dashboard/notifications' component={Notifications} />
			<Route path='/dashboard/following' component={Following} />
			<Route path='/dashboard/discover' component={Discover} />
			<Route path='/dashboard/edit-profile' component={EditProfile} />
			<Route path='/browse-profile' component={ProfileBrowse} />
			<Route path='/messages' component={MessageBoard} />
			{/* <Route path='/browse-profile/:id' component={ProfileShow} /> */}
			<Route exact path='/gig' component={GigBrowse} />
			<Route path='/gig/:id' component={GigDetail} />
			<Route path='*' component={Landing} />
		</Switch>
	);
};

export default Routes;
