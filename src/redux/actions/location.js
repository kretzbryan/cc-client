import { v4 as uuidv4 } from 'uuid';
import { get } from '../../utils/api';

import { SET_ALERT, REMOVE_ALERT, SET_TAGS, SET_LOCATIONS } from './types';

export const getTags = (text) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get('/api/data/locations', { text }, authRequired);
		dispatch({
			type: SET_LOCATIONS,
			payload: res.data.results,
		});
	} catch (error) {
		console.log(error.message);
	}
};

// export const removeAlert = id => dispatch => {
//     dispatch({
//         type: REMOVE_ALERT,
//         payload: id
//     })
// }
