import {
	SET_ALERT,
	REMOVE_ALERT,
	SET_LOCATIONS,
	CLEAR_LOCATION_RESULTS,
} from '../actions/types';

const initialState = {
	results: [],
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_LOCATIONS:
			return { loading: false, results: action.payload };
		case CLEAR_LOCATION_RESULTS:
			return initialState;
		default:
			return state;
	}
}
