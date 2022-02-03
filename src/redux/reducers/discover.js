import {
	SET_DISCOVER_VALUE,
	CLEAR_DISCOVER,
	SET_DISCOVER_ERROR,
} from '../actions/types';

const initialState = {
	people: { value: [], error: '' },
	gigs: { value: [], error: '' },
	events: { value: [], error: '' },
	groups: { value: [], error: '' },
	loading: false,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_DISCOVER_VALUE:
			return {
				...state,
				[payload.key]: { ...state[payload.key], value: payload.value },
			};
		case SET_DISCOVER_ERROR:
			return {
				...state,
				[payload.key]: { ...state[payload.key], error: payload.err },
			};
		case CLEAR_DISCOVER:
			return {
				people: [],
				gigs: [],
				events: [],
				groups: [],
				loading: false,
			};
		default:
			return state;
	}
}
