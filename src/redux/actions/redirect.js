export const setRedirect = (link) => {
	return { type: 'REDIRECT', payload: link };
};

export const removeRedirect = () => {
	return { type: 'REMOVE_REDIRECT' };
};
