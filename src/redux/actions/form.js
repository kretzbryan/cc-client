import { SET_FORM, FORM_ERROR, CLEAR_FORM } from './types';
import {
	registerForm,
	loginForm,
	postForm,
	gigForm,
	userForm,
} from '../../utils/forms';
import { get, post, put, remove } from '../../utils/api';

export const setLogin = () => async (dispatch) => {
	try {
		dispatch({
			type: SET_FORM,
			payload: loginForm,
		});
	} catch (err) {
		dispatch({
			type: FORM_ERROR,
			payload: err,
		});
	}
};

export const setRegister = () => async (dispatch) => {
	try {
		dispatch({
			type: SET_FORM,
			payload: registerForm,
		});
	} catch (err) {
		dispatch({
			type: FORM_ERROR,
			payload: err,
		});
	}
};

export const setAddGig = () => async (dispatch) => {
	try {
		dispatch({
			type: SET_FORM,
			payload: gigForm,
		});
	} catch (err) {
		dispatch({
			type: FORM_ERROR,
			payload: err,
		});
	}
};

export const setEditPost = (id) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get(`/api/data/post/${id}`, {}, authRequired);
		dispatch({
			type: SET_FORM,
			payload: {
				...postForm,
				values: {
					text: res.data.text,
				},
			},
		});
	} catch (err) {
		dispatch({
			type: FORM_ERROR,
			payload: err,
		});
	}
};

export const setAddEvent = () => (dispatch) => {
	dispatch({
		type: SET_FORM,
		payload: gigForm,
	});
};

export const clearForm = () => async (dispatch) => {
	try {
		dispatch({
			type: CLEAR_FORM,
		});
	} catch (err) {
		dispatch({
			type: FORM_ERROR,
			payload: err,
		});
	}
};
