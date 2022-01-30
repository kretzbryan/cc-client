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

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Landing} />
			<PrivateRoute path='/home' component={Home} />
			<PrivateRoute path='/profile/:id' component={ProfileDetail} />
			<PrivateRoute path='/dashboard/connections' component={Connections} />
			<PrivateRoute path='/dashboard/events' component={EventBrowse} />
			<PrivateRoute path='/dashboard/notifications' component={Notifications} />
			<PrivateRoute path='/dashboard/following' component={Following} />
			<PrivateRoute path='/dashboard/discover' component={Discover} />
			<PrivateRoute path='/browse' component={ProfileBrowse} />
			<PrivateRoute exact path='/gig' component={GigBrowse} />
			<PrivateRoute path='/gig/:id' component={GigDetail} />
		</Switch>
	);
};

export default Routes;
