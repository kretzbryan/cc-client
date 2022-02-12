import {
	SET_ALERT,
	REMOVE_ALERT,
	SET_LOCATIONS,
	CLEAR_LOCATION_RESULTS,
	SET_MESSAGES,
} from '../actions/types';

const initialState = {
	messages: null,
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_MESSAGES:
			return { loading: false, messages: action.payload };
		case CLEAR_LOCATION_RESULTS:
			return initialState;
		default:
			return state;
	}
}
