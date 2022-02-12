import { ADD_FEED_ITEM, EDIT_FEED_ITEM, SET_FEED } from '../actions/types';

const initialState = {
	feed: [],
	loading: true,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_FEED:
			return {
				...state,
				feed: payload,
				loading: false,
			};
		case EDIT_FEED_ITEM:
			return {
				...state,
				feed: state.feed.map((item) =>
					item._id === payload._id ? payload : item
				),
				loading: false,
			};
		case ADD_FEED_ITEM:
			return {
				...state,
				feed: [payload, ...state.feed],
				loading: false,
			};
		default:
			return state;
	}
}
