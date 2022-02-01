import { v4 as uuidv4 } from 'uuid';
import { get } from '../../utils/api';

import { SET_ALERT, REMOVE_ALERT, SET_TAGS } from './types';

export const getLocations = (text) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get('/api/data/tag', { text }, authRequired);
		dispatch({
			type: SET_TAGS,
			payload: res.data.tags,
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
