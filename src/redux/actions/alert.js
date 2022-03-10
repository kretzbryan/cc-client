import { v4 as uuidv4 } from 'uuid';

export const setError = (key, value) => (dispatch) => {
	const id = uuidv4();
	dispatch({
		type: 'SET_ERROR',
		payload: { key, value },
	});
};

export const setErrorFields = (fields) => (dispatch) => {
	const id = uuidv4();
	dispatch({
		type: 'SET_ERROR_FIELDS',
		payload: fields,
	});
};

export const removeAlert = (key) => (dispatch) => {
	dispatch({
		type: 'REMOVE_ERROR',
		payload: key,
	});
};
