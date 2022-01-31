import { get, post, put, remove } from '../../utils/api';
import {
	ADD_POST,
	EDIT_POST,
	POST_ERROR,
	GET_POST,
	GET_POSTS,
	DELETE_POST,
	HANDLE_COMMENT,
	COMMENT_ERROR,
} from './types';

export const addPost = (text) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify({ text });
	try {
		const authRequired = true;
		const res = await post('data/post', body, authRequired);
		dispatch({
			type: ADD_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: err,
		});
	}
};

export const getPosts =
	(profileId = null) =>
	async (dispatch) => {
		try {
			if (profileId === true) {
				const authRequired = true;
				const res = await get(
					`data/post/user/${profileId}`,
					{},
					authRequired
				).catch((err) => {
					throw {
						message: `In post/user ${err.message}`,
					};
				});
				dispatch({
					type: GET_POSTS,
					payload: res.data,
				});
			} else {
				const res = await get(`data/post`).catch((err) => {
					throw {
						message: `In post ${err.message}`,
					};
				});
				dispatch({
					type: GET_POSTS,
					payload: res.data,
				});
			}
		} catch (error) {
			dispatch({
				type: POST_ERROR,
				payload: error.message,
			});
		}
	};
export const getUserPosts = (profileId) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get(
			`data/post/user/${profileId}`,
			{},
			authRequired
		).catch((err) => {
			throw {
				message: `In post/user ${err.message}`,
			};
		});
		dispatch({
			type: GET_POSTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: err,
		});
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await remove(`data/post/${id}`, {}, authRequired);
		dispatch({
			type: DELETE_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: err,
		});
	}
};

export const getPost = (id) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await get(`data/post/${id}`, {}, authRequired);

		dispatch({
			type: GET_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: err,
		});
	}
};

export const editPost = (post) => async (dispatch) => {
	const body = JSON.stringify(post);

	try {
		const authRequired = true;
		const res = await put(`data/post/${post.id}`, body, authRequired);
		dispatch({
			type: EDIT_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: err,
		});
	}
};

export const addPostComment =
	({ text, id }) =>
	async (dispatch) => {
		const body = { text };

		try {
			const authRequired = true;
			const res = await post(`data/post/${id}/comment`, body, authRequired);
			dispatch({
				type: HANDLE_COMMENT,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: COMMENT_ERROR,
				payload: err,
			});
		}
	};

export const editPostComment =
	({ text, postId, commentId }) =>
	async (dispatch) => {
		const body = { text };

		try {
			const authRequired = true;
			const res = await put(
				`data/post/${postId}/comment/${commentId}`,
				body,
				authRequired
			);
			console.log('editpost res', res);
			dispatch({
				type: HANDLE_COMMENT,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: COMMENT_ERROR,
				payload: err,
			});
		}
	};

export const deletePostComment = (postId, commentId) => async (dispatch) => {
	try {
		const authRequired = true;
		const res = await remove(
			`data/post/${postId}/comment/${commentId}`,
			{},
			authRequired
		);

		dispatch({
			type: HANDLE_COMMENT,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: COMMENT_ERROR,
			payload: err,
		});
	}
};
