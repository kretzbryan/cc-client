import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register, login } from '../../actions/auth';
import {
	addPost,
	deletePost,
	editPost,
	addPostComment,
} from '../../actions/post';
import { addGig } from '../../actions/gig';
import { clearForm } from '../../actions/form';

const Form = ({
	isAuthenticated,
	form: { loading, textAreas, inputs, values, className, buttonText, name },
	login,
	register,
	addGig,
	clearForm,
}) => {
	const [formValues, setFormValues] = useState({});

	const handleChange = (e) => {
		e.preventDefault();
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		name === 'login' && login(formValues);
		name === 'register' && register(formValues);
		name === 'addPost' && addPost(formValues);
		name === 'deletePost' && deletePost(formValues);
		name === 'editPost' && editPost(formValues);
		name === 'gigForm' && addGig(formValues);
		name == 'addPostComment' && addPostComment(formValues);
	};

	useEffect(() => {
		setFormValues({
			...values,
		});
	}, []);

	if (name === 'login' && isAuthenticated === true) {
		return <Redirect to='/home' />;
	}

	return (
		<Fragment>
			<form
				onSubmit={onSubmit}
				method='POST'
				className={`form ${className}`}
				autoComplete='off'>
				{!loading &&
					inputs &&
					inputs.map((input) => {
						const { key, className, type, placeholder, name, label } = input;

						return label ? (
							<div key={key} className={className + '__group form__group'}>
								<input
									type={type}
									placeholder={placeholder}
									name={name}
									className={`form__input ${className}`}
									onChange={handleChange}
								/>
								<label
									htmlFor={label.htmlFor}
									className={`form__label ${label.className}`}>
									{placeholder}
								</label>
							</div>
						) : (
							<div key={key} className={className + '__group form__group'}>
								<input
									type={type}
									placeholder={placeholder}
									name={name}
									onChange={handleChange}
								/>
							</div>
						);
					})}
				{textAreas &&
					textAreas.map((area) => {
						return (
							<textarea
								name={area.name}
								key={area.key}
								cols={area.cols}
								rows={area.rows}
								onChange={handleChange}>
								{area.value}
							</textarea>
						);
					})}
				<button
					type='submit'
					className={`btn btn-primary ${className}__button`}>
					{buttonText}
				</button>
			</form>
		</Fragment>
	);
};

Form.propTypes = {
	login: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	addGig: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	clearForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	form: state.form,
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register, addGig, clearForm })(
	Form
);
