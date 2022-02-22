import {
	SET_ALERT,
	REMOVE_ALERT,
	SET_EVENTS,
	SET_EVENT_BY_ID,
} from '../actions/types';

const initialState = {
	events: [],
	event: null,
	loading: true,
};

export default function (state = initialState, action) {
	const { payload } = action;
	switch (action.type) {
		case SET_EVENTS:
			return {
				...state,
				events: payload,
				loading: false,
			};
		case SET_EVENT_BY_ID:
			return {
				...state,
				event: state.events.find(({ _id }) => _id === payload),
				loading: false,
			};
		case REMOVE_ALERT:
			return state.filter((alert) => alert.id !== action.payload);
		default:
			return state;
	}
}
