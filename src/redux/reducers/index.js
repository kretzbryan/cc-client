import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import gig from './gig';
import form from './form';
import discover from './discover';
import feed from './feed';
import event from './event';

import redirect from './redirect';
import popup from './popup';
import location from './location';
import errors from './errors';
import tags from './tags';
import message from './message';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'message'],
};

const rootReducer = combineReducers({
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
	discover,
	feed,
	message,
	event,
	errors,
});

export default persistReducer(persistConfig, rootReducer);
