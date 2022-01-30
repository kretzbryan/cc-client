import api from '../utils/api';
import {
	GET_PROFILE,
	PROFILE_ERROR,
	GET_PROFILES,
	UPDATE_PROFILE,
} from './types';

export const getUserDashboard = () => async (dispatch) => {
	try {
		const res = await api.get('user');
		console.log(res.data);
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: err,
		});
	}
};

export const getUserProfile = (id) => async (dispatch) => {
	try {
		const res = await api.get(`profile/${id}`);
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: err,
		});
	}
};

export const getAllProfiles = () => async (dispatch) => {
	try {
		const res = await api.get('profile/all');

		dispatch({
			type: GET_PROFILES,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: err,
		});
	}
};

export const editProfileImage = (file) => async (dispatch) => {
	const formData = new FormData();
	formData.append('file', file);
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};

	try {
		const res = await api.put('profile/image/', formData, config);
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: err,
		});
	}
};
