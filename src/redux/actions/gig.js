import { get, post, put, remove } from '../../utilsapi';
import { setProfile } from './profile';
import {
	ADD_GIG,
	GET_GIGS,
	GIG_ERROR,
	DELETE_GIG,
	EDIT_GIG,
	EDIT_POST,
	GET_GIG,
} from './types';

export const addGig = (body) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	// body = JSON.stringify(body);
	try {
		const authRequired = true;
		const res = await post('api/data/gig', body, authRequired).catch((err) => {
			throw {
				message: err.message,
			};
		});
		console.log(res.data);
		dispatch({
			type: ADD_GIG,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GIG_ERROR,
			payload: err,
		});
	}
};

export const getGig = (id) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get(`api/data/gig/${id}`, {}, authRequired).catch(
			(err) => {
				throw {
					message: err.message,
				};
			}
		);
		dispatch({
			type: GET_GIG,
			payload: res.data,
		});
		dispatch(setProfile(res.data.createdBy));
	} catch (err) {
		dispatch({
			type: GIG_ERROR,
			payload: err,
		});
	}
};

export const getGigs = () => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get('api/data/gig', {}, authRequired);
		dispatch({
			type: GET_GIGS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GIG_ERROR,
			payload: err,
		});
	}
};

export const deleteGig = (id) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await remove(`api/data/gig${id}`, {}, authRequired).catch(
			(err) => {
				throw {
					message: err.message,
				};
			}
		);
		dispatch({
			type: DELETE_GIG,
			payload: id,
		});
	} catch (err) {}
};

export const editGig =
	({ title, location, text, _id }) =>
	async (dispatch) => {
		try {
			const authRequired = true;
			const body = JSON.stringify({ title, location, text });
			const res = await put(`api/data/gig/${_id}`, body, authRequired).catch(
				(err) => {
					throw {
						message: err.message,
					};
				}
			);

			dispatch({
				type: EDIT_POST,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: GIG_ERROR,
				payload: err,
			});
		}
	};

export const getRecentGigs =
	(num = null) =>
	async (dispatch) => {
		try {
			if (!num) {
				const authRequired = true;
				const res = await get('api/data/gig/recent', {}, authRequired).catch(
					(err) => {
						throw {
							message: err.message,
						};
					}
				);
				dispatch({
					type: GET_GIGS,
					payload: res.data,
				});
			} else {
				const authRequired = true;
				const res = await get(
					`api/data/gig/recent/${num}`,
					{},
					authRequired
				).catch((err) => {
					throw {
						message: err.message,
					};
				});
				console.log('res.data', res.data);
				dispatch({
					type: GET_GIGS,
					payload: res.data,
				});
			}
		} catch (err) {
			dispatch({
				trype: GIG_ERROR,
				payload: err,
			});
		}
	};
