import { v4 as uuidv4 } from 'uuid';
import { get } from '../../utilsapi';

import { SET_EVENTS, REMOVE_ALERT } from './types';

export const setEvents = (payload) => (dispatch) => {
	dispatch({
		type: SET_EVENTS,
		payload,
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
