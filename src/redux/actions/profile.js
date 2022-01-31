import { get, post, put, remove } from '../../utils/api';
import {
	GET_PROFILE,
	PROFILE_ERROR,
	GET_PROFILES,
	UPDATE_PROFILE,
} from './types';

export const getUserDashboard = () => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get('data/user', {}, authRequired);
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
		const res = await get(`data/profile/${id}`, {}, authRequired);
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
		const res = await get('data/profile/all', {}, authRequired);

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

	try {
		const authRequired = true;
		const res = await put('data/profile/image/', formData, authRequired);
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
