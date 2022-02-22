import {
	SET_ALERT,
	REMOVE_ALERT,
	SET_LOCATIONS,
	CLEAR_LOCATION_RESULTS,
	SET_MESSAGES,
	EDIT_MESSAGE,
} from '../actions/types';

const initialState = {
	unreadMessages: null,
	readMessages: null,
	loading: false,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case SET_MESSAGES:
			return {
				loading: false,
				unreadMessages: payload.unread,
				readMessages: payload.read,
			};
		case EDIT_MESSAGE:
			return {
				...state,
				unreadMessages: state.unreadMessages.map((thread) => {
					if (thread._id === payload.updatedThread._id) {
						return payload.updatedThread;
					} else return thread;
				}),
				readMessages: state.readMessages.map((thread) => {
					if (thread._id === payload.updatedThread._id) {
						return payload.updatedThread;
					} else return thread;
				}),
			};
		case CLEAR_LOCATION_RESULTS:
			return initialState;
		default:
			return state;
	}
}
