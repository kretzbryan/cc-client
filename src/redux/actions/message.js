import { EDIT_MESSAGE, SET_MESSAGES } from './types';
import { post } from '../../utilsapi';

export const setMessages = (messages) => async (dispatch) => {
	dispatch({
		type: SET_MESSAGES,
		payload: messages,
	});
};

export const sendMessage = (body, thread, threadIndex) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await post(
			'/api/data/message/send-message',
			body,
			authRequired
		);

		dispatch({
			type: EDIT_MESSAGE,
			payload: { threadIndex, message: res.data.savedMessage },
		});
	} catch (error) {}
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
