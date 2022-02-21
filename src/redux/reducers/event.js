import { SET_ALERT, REMOVE_ALERT, SET_EVENTS } from '../actions/types';

const initialState = {
	events: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_EVENTS:
			return {
				...state,
				events: action.payload,
			};
		case REMOVE_ALERT:
			return state.filter((alert) => alert.id !== action.payload);
		default:
			return state;
	}
}
