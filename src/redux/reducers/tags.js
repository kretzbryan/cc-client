import {
	SET_ALERT,
	REMOVE_ALERT,
	SET_TAGS,
	CLEAR_TAGS,
} from '../actions/types';

const initialState = {
	tags: [],
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_TAGS:
			return {
				...state,
				tags: action.payload,
			};
		case CLEAR_TAGS:
			return initialState;
		default:
			return state;
	}
}
