import { SET_MESSAGES } from './types';

export const setMessages = (messages) => async (dispatch) => {
	dispatch({
		type: SET_MESSAGES,
		payload: messages,
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
