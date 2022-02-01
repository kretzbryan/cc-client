import { SET_POPUP } from './types';

export const setPopup = (payload) => (dispatch) => {
	dispatch({
		type: SET_POPUP,
		payload,
	});
};

// export const removeAlert = id => dispatch => {
//     dispatch({
//         type: REMOVE_ALERT,
//         payload: id
//     })
// }
