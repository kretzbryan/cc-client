import { setAlert } from './alert';
import {
	REGISTER_CONFIRMED,
	REGISTER_DENIED,
	USER_LOADED,
	AUTH_DENIED,
	LOGIN_CONFIRMED,
	LOGIN_DENIED,
	LOGOUT,
	CLEAR_PROFILE,
	EDIT_USER_FIELD,
} from './types';
import { get, post, put, remove } from '../../utils/api';
import { setRedirect } from './redirect';
import { setPosts } from './post';
import { setFeed } from './feed';
import { setMessages } from './message';

export const setUser = (user) => (dispatch) => {
	dispatch({
		type: USER_LOADED,
		payload: user,
	});
};

export const loadUser = () => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get('/api/data/user', {}, authRequired);
		dispatch({
			type: USER_LOADED,
			payload: res.data.user,
		});

		const { posts, threads } = res.data.user;
		dispatch(setMessages(threads));
		dispatch(setFeed(posts));
	} catch (err) {
		console.log(err.message);
		dispatch(logout());
		dispatch({
			type: AUTH_DENIED,
		});
	}
};

export const register =
	({ firstName, lastName, username, email, password, password2 }) =>
	async (dispatch) => {
		const body = JSON.stringify({
			firstName,
			lastName,
			username,
			email,
			password,
			password2,
		});

		try {
			const authRequired = false;
			const res = await post('/api/auth/register', body, authRequired);
			localStorage.setItem('authToken', res.data.token);
			if (localStorage.getItem('authToken')) {
				dispatch(setRedirect('/home'));
			}
			dispatch(setAlert('Register Success!', 'success'));
			dispatch({
				type: REGISTER_CONFIRMED,
			});
		} catch (err) {
			const errors = err.response.data.errors;
			console.log(errors);
			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
			}
			dispatch({
				type: REGISTER_DENIED,
			});
		}
	};

export const login =
	({ username, password }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const authRequired = false;
			const res = await post(
				'/api/auth/login',
				{ username, password },
				authRequired
			).catch((err) => {
				throw {
					message: `In login response ${err.message}`,
				};
			});
			dispatch({
				type: LOGIN_CONFIRMED,
				payload: res.data,
			});
			const { token } = res.data;
			localStorage.setItem('authToken', token);
			if (localStorage.getItem('authToken')) {
				dispatch(setRedirect('/home'));
			}
			// dispatch(loadUser());
		} catch (err) {
			const errors = err.message;
			console.log(errors);
			/*  if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        } */
			dispatch({
				type: LOGIN_DENIED,
			});
		}
	};

export const logout = () => async (dispatch) => {
	localStorage.removeItem('authToken');
	dispatch({ type: LOGOUT });
	dispatch({ type: CLEAR_PROFILE });
};

export const editUserField = (key, value) => (dispatch) => {
	dispatch({
		type: EDIT_USER_FIELD,
		payload: { key, value },
	});
};

// export const checkUniqueUserField = (key, value) => async (dispatch) => {
// 	try {
// 		const authRequired = true;
// 		const res = await post(
// 			`/api/data/user/check-unique-field`,
// 			{ key, value },
// 			authRequired
// 		);

// 		if(res.data.unique) {

// 		}

// 		// dispatch({
// 		// 	type: CHECK_UNIQUE_USER_FIELD,
// 		// 	payload: { key, value },
// 		// });
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// };
