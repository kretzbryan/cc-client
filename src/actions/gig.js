import api from '../utils/api';
import {
	ADD_GIG,
	GET_GIGS,
	GIG_ERROR,
	DELETE_GIG,
	EDIT_GIG,
	EDIT_POST,
	GET_GIG,
} from './types';

export const addGig =
	({ title, location, text }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({ title, location, text });
		try {
			const res = await api.post('gig', body, config);
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
		const res = await api.get(`/gig/${id}`);
		dispatch({
			type: GET_GIG,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GIG_ERROR,
			payload: err,
		});
	}
};

export const getGigs = () => async (dispatch) => {
	try {
		const res = await api.get('gig');
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
		const res = api.delete(`gig${id}`);
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
			const body = JSON.stringify({ title, location, text });
			const res = await api.put(`gig/${_id}`, body);

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
				const res = await api.get('gig/recent');
				dispatch({
					type: GET_GIGS,
					payload: res.data,
				});
			} else {
				const res = await api.get(`gig/recent/${num}`);
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
