import { v4 as uuidv4 } from 'uuid';
import { get, post } from '../../utils/api';

import { SET_ALERT, REMOVE_ALERT, SET_TAGS, CLEAR_TAGS } from './types';

export const getTags = (value) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post('/api/data/tag/find-tag', { value }, authRequired);
		dispatch({
			type: SET_TAGS,
			payload: res.data.tags,
		});
	} catch (error) {
		console.log(error.message);
	}
};

export const clearTags = (id) => (dispatch) => {
	dispatch({
		type: CLEAR_TAGS,
	});
};
