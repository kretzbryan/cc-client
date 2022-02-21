import { v4 as uuidv4 } from 'uuid';
import { get, post } from '../../utilsapi';

import {
	SET_ALERT,
	REMOVE_ALERT,
	SET_TAGS,
	SET_LOCATIONS,
	CLEAR_LOCATION_RESULTS,
} from './types';

export const getLocations = (text) => async (dispatch) => {
	console.log(text);
	try {
		const authRequired = true;
		const res = await post('/api/data/locations', { text }, authRequired);
		dispatch({
			type: SET_LOCATIONS,
			payload: res.data.results,
		});
	} catch (error) {
		console.log(error.message);
	}
};

export const clearLocationResults = () => (dispatch) => {
	dispatch({
		type: CLEAR_LOCATION_RESULTS,
	});
};

// export const removeAlert = id => dispatch => {
//     dispatch({
//         type: REMOVE_ALERT,
//         payload: id
//     })
// }
