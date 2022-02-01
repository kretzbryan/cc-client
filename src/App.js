import React, { useEffect } from 'react';
import Routes from './config/Routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './redux/actions/auth';
import Popup from './components/layout/Popup';
// import './firebase/firebase';

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
