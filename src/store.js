import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

import { persistStore } from 'redux-persist';

const initialState = {};

const middleWare = [thunk];
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleWare))
);

let currentState = store.getState();

store.subscribe(() => {
	let previousState = currentState;
	currentState = store.getState();
});

const persistor = persistStore(store);

export default store;
