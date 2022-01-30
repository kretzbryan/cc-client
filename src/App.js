import React, { useEffect } from 'react';
import Routes from './config/Routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import Popup from './components/layout/Popup';
// import './firebase/firebase';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<div>
				<Header />
				<Routes />
				<Footer />
				<Popup />
			</div>
		</Provider>
	);
};

export default App;
