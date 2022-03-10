const initialState = {
	flightErrors: [],
	hotelErrors: [],
	travelTypeError: '',
	activityThemeError: '',
	returnDateError: '',
	authErrors: null,
	loginError: '',
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'SET_FLIGHT_ERROR':
			return {
				...state,
				flightErrors: state.flightErrors.map((flight, index) => {
					if (index === payload.index) {
						return {
							...flight,
							[payload.key]: payload.message,
						};
					} else {
						return flight;
					}
				}),
			};
		case 'SET_AUTH_ERROR_FIELDS':
			return {
				...state,
				authErrors: payload,
			};
		case 'SET_AUTH_ERROR':
			return {
				...state,
				authErrors: { ...state.authErrors, [payload.key]: payload.value },
			};
		case 'REMOVE_AUTH_ERROR':
			return {
				...state,
				authErrors: { ...state.authErrors, [payload.key]: '' },
			};

		case 'SET_LOGIN_ERROR':
			return {
				...state,
				loginError: payload,
			};
		case 'SET_REGISTER_ERROR':
			return {
				...state,
				registerErrors: {
					...state.registerErrors,
					[payload.key]: payload.message,
				},
			};
		case 'CLEAR_FLIGHT_ERROR':
			return {
				...state,
				flightErrors: [
					...state.flightErrors.map((flight, index) => {
						if (index === payload.index) {
							return {
								...flight,
								[payload.key]: '',
							};
						} else {
							return flight;
						}
					}),
				],
			};
		case 'SET_TRAVEL_TYPE_ERROR':
			return {
				...state,
				travelTypeError: payload,
			};
		case 'SET_ACTIVITY_THEME_ERROR':
			return {
				...state,
				activityThemeError: payload,
			};
		case 'SET_HOTEL_ERROR':
			return {
				...state,
				hotelErrors: state.hotelErrors.map((hotel, index) => {
					if (index === payload.index) {
						return {
							...hotel,
							[payload.key]: payload.message,
						};
					} else {
						return hotel;
					}
				}),
			};
		case 'SET_RETURN_DATE_ERROR':
			return {
				...state,
				returnDateError: payload,
			};
		case 'CLEAR_FLIGHT_ERRORS':
			return {
				...state,
				flightErrors: [{ departure: '', destination: '', departureDate: '' }],
			};
		case 'ADD_FLIGHT_ERROR_OBJECT':
			return {
				...state,
				flightErrors: [
					...state.flightErrors,
					{ departure: '', destination: '', departureDate: '' },
				],
			};
		case 'ADD_HOTEL_ERROR_OBJECT':
			return {
				...state,
				hotelErrors: [
					...state.hotelErrors,
					{ city: '', startDate: '', endDate: '', radius: '' },
				],
			};
		default:
			return state;
	}
}
