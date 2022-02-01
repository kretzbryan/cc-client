import {
	GET_POSTS,
	ADD_POST,
	EDIT_POST,
	POST_ERROR,
	DELETE_POST,
	GET_POST,
	HANDLE_COMMENT,
	COMMENT_ERROR,
} from '../actions/types';

const initialState = {
	posts: [],
	post: null,
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	console.log(type, payload);
	let updatedPost;
	switch (type) {
		case EDIT_POST:
			updatedPost = state.posts.find((post) => post._id === payload._id);
			return {
				...state,
				posts: [
					{ ...updatedPost, text: payload.text },
					...state.posts.filter((post) => post !== updatedPost),
				],
			};
		case ADD_POST:
			return {
				...state,
				posts: [payload, ...state.posts],
				loading: false,
			};
		case HANDLE_COMMENT:
			return {
				...state,
				posts: state.posts.map((post) => {
					return post._id === payload._id ? payload : post;
				}),
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== payload._id),
				loading: false,
			};
		case POST_ERROR:
			return {
				...state,
				error: payload,
			};
		case COMMENT_ERROR:
			return {
				...state,
				error: payload,
			};

		case GET_POSTS:
			console.log('payload', payload);
			return {
				...state,
				posts: [...payload],
				loading: false,
			};
		case GET_POST:
			return {
				...state,
				post: payload,
				loading: false,
			};
		default:
			return state;
	}
}
