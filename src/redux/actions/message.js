import { EDIT_MESSAGE, EDIT_THREADS, SET_MESSAGES } from './types';
import { post } from '../../utils/api';

export const setMessages = (threads) => async (dispatch) => {
	dispatch({
		type: SET_MESSAGES,
		payload: threads,
	});
};

export const sendMessage = (body) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post(
			'/api/data/message/send-message',
			body,
			authRequired
		);

		dispatch({
			type: EDIT_MESSAGE,
			payload: { updatedThread: res.data.savedThread },
		});
	} catch (error) {}
};

export const updateThreads = (threads) => (dispatch) => {
	dispatch({
		type: EDIT_THREADS,
		payload: threads,
	});
};

// export const getMessages = (text) => async (dispatch) => {
// 	console.log(text);
// 	try {
// 		const authRequired = true;
// 		const res = await post('/api/data/messages', { text }, authRequired);
// 		dispatch({
// 			type: SET_LOCATIONS,
// 			payload: res.data.results,
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };
