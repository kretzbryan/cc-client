import {
	SET_ALERT,
	REMOVE_ALERT,
	SET_LOCATIONS,
	SET_POPUP,
} from '../actions/types';

const initialState = {
	name: '',
	headerValue: '',
	submitAction: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_POPUP:
			return action.payload;

		default:
			return state;
	}
}
