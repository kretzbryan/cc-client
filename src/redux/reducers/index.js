import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import gig from './gig';
import form from './form';
import discover from './discover';

import redirect from './redirect';
import popup from './popup';
import location from './location';
import tags from './tags';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['trip', 'auth', 'preferences', 'amadeus'],
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
});

export default persistReducer(persistConfig, rootReducer);
