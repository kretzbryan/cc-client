import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setAuthError, removeAuthError } from '../../redux/actions/errors';
import { register } from '../../redux/actions/auth';
import validator from 'validator';
import { errorStrings } from '../../utils/errors';
import ErrMessage from '../layout/ErrMessage';
import { setErrorFields } from '../../redux/actions/alert';
const authFormHOC = (WrappedComponent) => {
	const AuthFormComponent = ({
		setAuthError,
		removeAuthError,
		authErrors,
		...props
	}) => {
		const [formData, setFormData] = useState(null);
		// const [success, setSuccess] = useState(false);
		const handleChange = (e) => {
			const { name, value } = e.target;
			if (value) {
				removeAuthError(name);
			}
			setFormData({
				...formData,
				[name]: e.target.value,
			});
		};

		const passwordValidation = (p) => {
			if (p.length < 8) {
				return false;
			}
			if (/[A-Z]/.test(p) === false) {
				console.log(1);
				return false;
			} else if (/[0-9]/.test(p) === false) {
				console.log(2);
				return false;
			} else if (/[!@#$%^&*]/.test(p) === false) {
				console.log(3);
				return false;
			} else {
				return true;
			}
		};

		const setError = (boolean, key, message) => {
			if (!boolean) {
				setAuthError(key, message);
			}
			return boolean;
		};

		const canBeSubmitted = () => {
			let passwordComparison = {};

			let allFieldsValid = true;
			let isValidField;
			for (let key in formData) {
				if (key === 'email') {
					isValidField = setError(
						validator.isEmail(formData[key]),
						key,
						errorStrings[key]
					);
				} else if (key === 'password1' || key === 'password2') {
					passwordComparison[key] = true;
					isValidField = setError(
						passwordValidation(formData[key]),
						key,
						errorStrings[key]
					);
				} else {
					isValidField = setError(formData[key], key, errorStrings[key]);
				}

				if (!isValidField) {
					allFieldsValid = false;
				}
			}
			const isPasswordComparison =
				passwordComparison.password1 && passwordComparison.password2;

			const samePassword =
				formData.password1 === formData.password2 ? true : false;

			return (isPasswordComparison ? samePassword : true) && allFieldsValid;
		};

		const handlePasswordStatus = (password) => {
			console.log('handlePasswordStatus working', password);
			if (password && !passwordValidation(password)) {
				return <span className='weak'>Weak password</span>;
			} else if (password && passwordValidation(password)) {
				return <span className='strong'>Strong password</span>;
			} else {
				return null;
			}
		};

		const handleSamePassword = (first, second) => {
			if (second && first === second) {
				return <span className='match'>Passwords Match</span>;
			} else if (second && first !== second) {
				return <span className='no-match'>Passwords Do Not Match</span>;
			} else {
				return null;
			}
		};

		const returnError = (key) => {
			return authErrors && authErrors[key] ? (
				<ErrMessage text={authErrors[key]} />
			) : null;
		};
		useEffect(() => {
			return function cleanUp() {
				setFormData(null);
			};
		}, []);

		return (
			<WrappedComponent
				setErrorFields={setErrorFields}
				setAuthError={setAuthError}
				removeAuthError={removeAuthError}
				canBeSubmitted={canBeSubmitted}
				authErrors={authErrors}
				handleChange={handleChange}
				handlePasswordStatus={handlePasswordStatus}
				handleSamePassword={handleSamePassword}
				returnError={returnError}
				formData={formData}
				setFormData={setFormData}
				{...props}
			/>
		);
	};

	const mapStateToProps = (state) => ({
		authErrors: state.errors.authErrors,
	});

	return connect(mapStateToProps, {
		setAuthError,
		removeAuthError,
	})(AuthFormComponent);
};

export default authFormHOC;
