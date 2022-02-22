import { v4 as uuidv4 } from 'uuid';
import { get } from '../../utils/api';

import { SET_EVENTS, REMOVE_ALERT, SET_EVENT, SET_EVENT_BY_ID } from './types';

export const setEvents = (payload) => (dispatch) => {
	dispatch({
		type: SET_EVENTS,
		payload,
	});
};

export const setEventById = (id) => async (dispatch) => {
	dispatch({
		type: SET_EVENT_BY_ID,
		payload: id,
	});
};

export const getEvents = (payload) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get('/api/data/event/all', {}, authRequired);
		dispatch({
			type: SET_EVENTS,
			payload: res.data.events,
		});
	} catch (err) {}
};

// export const removeAlert = id => dispatch => {
//     dispatch({
//         type: REMOVE_ALERT,
//         payload: id
//     })
// }
