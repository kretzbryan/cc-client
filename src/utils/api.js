import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL || '';

const makeRequest = async (method, pathname, data, authRequired) => {
	const token = localStorage.getItem('authToken');
	const url = baseURL + pathname;

	let headers;
	if (data instanceof FormData) {
		headers = data.getHeaders;
	} else {
		headers = {
			Accept: '*/*',
			'Content-Type': 'application/json',
		};
	}
	const body = data;
	if (authRequired) headers = { ...headers, 'x-auth-token': token };
	const response = await axios({ method, url, headers, data });
	return response;
};

export const get = (pathname, data, authRequired) =>
	makeRequest('get', pathname, data, authRequired);

export const put = (pathname, data, authRequired) =>
	makeRequest('put', pathname, data, authRequired);

export const post = (pathname, data, authRequired) =>
	makeRequest('post', pathname, data, authRequired);

export const remove = (pathname, data, authRequired) =>
	makeRequest('delete', pathname, data, authRequired);

// export const run_ip_check = () => {
// update user's IP address in database if it has changed: run on login, register and page refresh
// 	axios.get('https://geolocation-db.com/json/').then((ip_response) => {
// 		let new_ip_address = ip_response.data.IPv4;
// 		let old_ip_address = localStorage.getItem('ip_address');

// 		if (old_ip_address !== new_ip_address) {
// 			post('/api/v1/amadeus_test/save_ip', { ip: new_ip_address }, true).then(
// 				(response) => {
// 					localStorage.setItem('ip_address', new_ip_address);
// 				}
// 			);
// 		}
// 	});
// };
