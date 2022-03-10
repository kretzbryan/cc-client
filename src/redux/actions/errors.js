export const setFlightError = (index, key, message) => (dispatch) => {
	dispatch({
		type: 'SET_FLIGHT_ERROR',
		payload: { index, key, message },
	});
};

export const setHotelError = (index, key, message) => (dispatch) => {
	dispatch({
		type: 'SET_HOTEL_ERROR',
		payload: { index, key, message },
	});
};

export const addFlightErrorObject = () => (dispatch) => {
	dispatch({
		type: 'ADD_FLIGHT_ERROR_OBJECT',
	});
};

export const addHotelErrorObject = () => (dispatch) => {
	dispatch({
		type: 'ADD_HOTEL_ERROR_OBJECT',
	});
};

export const clearFlightError = (index, key) => (dispatch) => {
	dispatch({
		type: 'CLEAR_FLIGHT_ERROR',
		payload: { index, key },
	});
};

export const setReturnDateError = (message) => (dispatch) => {
	dispatch({
		type: 'SET_RETURN_DATE_ERROR',
		payload: message,
	});
};

export const setActivityThemeError = (message) => (dispatch) => {
	dispatch({
		type: 'SET_ACTIVITY_THEME_ERROR',
		payload: message,
	});
};

export const setTravelTypeError = (message) => (dispatch) => {
	dispatch({
		type: 'SET_TRAVEL_TYPE_ERROR',
		payload: message,
	});
};

export const clearFlightErrors = () => (dispatch) => {
	dispatch({
		type: 'CLEAR_FLIGHT_ERRORS',
	});
};

export const setLoginError = (message) => (dispatch) => {
	dispatch({
		type: 'SET_LOGIN_ERROR',
		payload: message,
	});
};

export const setRegisterError = (key, message) => (dispatch) => {
	dispatch({
		type: 'SET_REGISTER_ERROR',
		payload: { key, message },
	});
};

export const setAuthErrorFields = (fields) => (dispatch) => {
	dispatch({
		type: 'SET_AUTH_ERROR_FIELDS',
		payload: fields,
	});
};

export const setAuthError = (key, value) => (dispatch) => {
	dispatch({
		type: 'SET_AUTH_ERROR',
		payload: { key, value },
	});
};

export const removeAuthError = (key, value) => (dispatch) => {
	dispatch({
		type: 'REMOVE_AUTH_ERROR',
		payload: { key },
	});
};
