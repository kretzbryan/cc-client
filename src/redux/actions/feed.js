import { post } from '../../utilsapi';
import { ADD_FEED_ITEM, EDIT_FEED_ITEM, SET_FEED } from '../actions/types';

export const setFeed = (items) => (dispatch) => {
	dispatch({
		type: SET_FEED,
		payload: items,
	});
};

export const editFeedItem = (item) => (dispatch) => {
	dispatch({
		type: EDIT_FEED_ITEM,
		payload: item,
	});
};

export const addFeedPost = (body) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post('/api/data/post', body, authRequired);
		dispatch({
			type: ADD_FEED_ITEM,
			payload: res.data,
		});
	} catch (err) {
		console.log(err.message);
	}
};

export const addFeedComment = (body) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post(`/api/data/comment`, body, authRequired);
		dispatch(editFeedItem(res.data.item));
	} catch (err) {
		console.log(err.message);
	}
};

// export const setFeed = () =>  dispatch => {

// }
