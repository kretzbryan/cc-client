import { get } from '../../utilsapi';
import { SET_DISCOVER_ERROR, SET_DISCOVER_VALUE } from './types';

export const setDiscover = (key) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get(`/api/data/${key}/discover`, {}, authRequired);
		dispatch({
			type: SET_DISCOVER_VALUE,
			payload: { value: res.data.discoverItems, key },
		});
	} catch (err) {
		dispatch({
			type: SET_DISCOVER_ERROR,
			payload: { err, key },
		});
	}
};
