const initialState = {
	pathname: '',
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'REDIRECT':
			return {
				pathname: payload,
			};

		case 'REMOVE_REDIRECT':
			return { ...state, pathname: '' };

		default:
			return state;
	}
}
