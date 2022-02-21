import { post } from '../../utilsapi';

export const denyConnection = (connectionId) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post(
			'/api/data/connection/deny',
			{ connectionId },
			authRequired
		);
	} catch (err) {
		console.log(err.message);
	}
};

export const approveConnection = (connectionId) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post(
			'/api/data/connection/approve',
			{ connectionId },
			authRequired
		);
		// dispatch({});
	} catch (err) {
		console.log(err.message);
	}
};

export const thisFunction = (id) => (dispatch) => {};
