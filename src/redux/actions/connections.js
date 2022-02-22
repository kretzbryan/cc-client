import { post } from '../../utils/api';
import { setUser } from './auth';

export const denyConnection = (connectionId, user) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post(
			'/api/data/connection/deny',
			{ connectionId },
			authRequired
		);
		dispatch(setUser({ ...user, connections: res.data.connections }));
	} catch (err) {
		console.log(err.message);
	}
};

export const approveConnection = (connectionId, user) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post(
			'/api/data/connection/approve',
			{ connectionId },
			authRequired
		);
		dispatch(setUser({ ...user, connections: res.data.connections }));
		// dispatch({});
	} catch (err) {
		console.log(err.message);
	}
};

export const removeConnection = (connectionId, user) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post(
			'/api/data/connection/remove',
			{ connectionId },
			authRequired
		);
		dispatch(setUser({ ...user, connections: res.data.connections }));
	} catch (err) {
		console.log(err.message);
	}
};

export const thisFunction = (id) => (dispatch) => {};
