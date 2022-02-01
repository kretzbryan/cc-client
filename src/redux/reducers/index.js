import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import gig from './gig';
import form from './form';

import redirect from './redirect';
import popup from './popup';
import location from './location';
import tags from './tags';

export default combineReducers({
	alert,
	auth,
	profile,
	post,
	gig,
	form,
	redirect,
	popup,
	tags,
	location,
});
