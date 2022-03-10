const initialState = {
	errors: {
		firstName: '',
		lastName: '',
		email: '',
		password1: '',
		password2: '',
	},
};

export default function (state = initialState, action) {
	const { payload } = action;
	switch (action.type) {
		case 'SET_ERROR':
			return {
				...state,
				errors: {
					...state.errors,
					[payload.key]: payload.value,
				},
			};
		case 'SET_ERROR_FIELDS':
			return {
				...state,
				errors: payload,
			};
		case 'REMOVE_ERROR':
			return {
				...state,
				errors: {
					...state.errors,
					[payload.key]: '',
				},
			};

		default:
			return state;
	}
}
