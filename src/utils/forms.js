import { login } from '../actions/auth';

const registerForm = {
	name: 'register',
	className: 'register-form',
	values: {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		password2: '',
	},
	buttonText: 'Register',
	headerValue: 'Sign Up',
	inputs: [
		{
			key: '0',
			type: 'text',
			placeholder: 'First Name',
			name: 'firstName',
			label: {
				htmlFor: 'firstName',
				className: 'login-form__label',
			},
		},
		{
			key: '1',
			type: 'text',
			placeholder: 'Last Name',
			name: 'lastName',
			label: {
				htmlFor: 'lastName',
				className: 'login-form__label',
			},
		},
		{
			key: '2',
			type: 'text',
			placeholder: 'Username',
			name: 'username',
			label: {
				htmlFor: 'username',
				className: 'login-form__label',
			},
		},
		{
			key: '3',
			type: 'email',
			placeholder: 'Email',
			name: 'email',
			label: {
				htmlFor: 'email',
				className: 'login-form__label',
			},
		},
		{
			key: '4',
			type: 'password',
			placeholder: 'Password',
			name: 'password',
			label: {
				htmlFor: 'password',
				className: 'login-form__label',
			},
		},
		{
			key: '5',
			type: 'password',
			placeholder: 'Re-type Password',
			name: 'password2',
			label: {
				htmlFor: 'password2',
				className: 'login-form__label',
			},
		},
	],
	textAreas: null,
};

const loginForm = {
	name: 'login',
	className: 'login-form',
	values: {
		username: '',
		password: '',
	},
	buttonText: 'Log In',
	headerValue: 'Sign In',
	inputs: [
		{
			key: '6',
			type: 'text',
			placeholder: 'Username',
			name: 'username',
			className: 'login-form__input',
			label: {
				htmlFor: 'username',
				className: 'login-form__label',
			},
		},
		{
			key: '7',
			type: 'password',
			placeholder: 'password',
			name: 'password',
			className: 'login-form__input',
			label: {
				htmlFor: 'location',
				className: 'login-form__label',
			},
		},
	],
	textAreas: null,
};

const postForm = {
	name: 'postForm',
	values: {
		text: '',
	},
	textAreas: [
		{
			key: '8',
			name: 'text',
			cols: '45',
			rows: '7',
		},
	],
	inputs: null,
};

const gigForm = {
	name: 'gigForm',
	className: 'gig-form',
	values: {
		location: '',
		title: '',
		description: '',
	},
	buttonText: 'Add Gig',
	headerValue: 'New Gig',
	inputs: [
		{
			key: '9',
			type: 'text',
			placeholder: 'Location',
			name: 'location',
			label: {
				htmlFor: 'location',
			},
		},
		{
			key: '10',
			type: 'text',
			placeholder: 'Title',
			name: 'title',
		},
		{
			key: '11',
			type: 'text',
			placeholder: 'Description',
			name: 'text',
		},
	],
	textAreas: null,
};

const userForm = {
	name: 'userForm',
	className: 'user-form',
	values: {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		username: '',
		password: '',
	},
	buttonText: 'Register',
	headerValue: 'Sign Up',
	inputs: [
		{
			key: '0',
			type: 'text',
			placeholder: 'First Name',
			name: 'firstName',
			label: {
				htmlFor: 'firstName',
				className: 'login-form__label',
			},
		},
		{
			key: '1',
			type: 'text',
			placeholder: 'Last Name',
			name: 'lastName',
			label: {
				htmlFor: 'lastName',
				className: 'login-form__label',
			},
		},
		{
			key: '2',
			type: 'text',
			placeholder: 'Username',
			name: 'username',
			label: {
				htmlFor: 'username',
				className: 'login-form__label',
			},
		},
		{
			key: '3',
			type: 'email',
			placeholder: 'Email',
			name: 'email',
			label: {
				htmlFor: 'email',
				className: 'login-form__label',
			},
		},
		{
			key: '4',
			type: 'password',
			placeholder: 'Password',
			name: 'password1',
			label: {
				htmlFor: 'password1',
				className: 'login-form__label',
			},
		},
		{
			key: '5',
			type: 'password',
			placeholder: 'Re-type Password',
			name: 'password2',
			label: {
				htmlFor: 'password2',
				className: 'login-form__label',
			},
		},
	],
	textAreas: null,
};

export { registerForm, loginForm, postForm, gigForm, userForm };
