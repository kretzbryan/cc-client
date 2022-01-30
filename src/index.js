import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';
import App from './App';

import 'normalize.css/normalize.css';
import './sass/main.scss';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
