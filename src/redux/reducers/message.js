import {
	SET_ALERT,
	REMOVE_ALERT,
	SET_LOCATIONS,
	CLEAR_LOCATION_RESULTS,
	SET_MESSAGES,
	EDIT_MESSAGE,
} from '../actions/types';

const initialState = {
	messages: null,
	loading: false,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case SET_MESSAGES:
			return { loading: false, messages: payload };
		case EDIT_MESSAGE:
			return {
				...state,
				messages: state.messages.map((thread, index) => {
					if (index === payload.threadIndex) {
						return {
							...thread,
							messages: [...thread.messages, payload.message],
						};
					} else {
						return thread;
					}
				}),
			};
		case CLEAR_LOCATION_RESULTS:
			return initialState;
		default:
			return state;
	}
}
