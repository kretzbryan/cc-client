import React, { Fragment, useState, setState, useEffect } from 'react';
import { editPost } from '../../redux/actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFeedPost } from '../../redux/actions/feed';

const AddPostForm = ({ toggleForm, addFeedPost }) => {
	const [text, setText] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		addFeedPost({ text, postType: 'self' });
		toggleForm();
	};

	const handleChange = (e) => {
		e.preventDefault();
		setText(e.target.value);
	};

	return (
		<div className='create__post__form'>
			<form onSubmit={handleSubmit}>
				<textarea
					className='post-form__content'
					name='text'
					placeholder='Say whats on your mind...'
					value={text}
					cols='45'
					rows='7'
					onChange={handleChange}
					required></textarea>
				<footer className='post-form__footer'>
					<button
						type='button'
						className='btn post-form__btn'
						onClick={toggleForm}>
						Close
					</button>
					<button type='submit' className='btn post-form__btn'>
						Confirm
					</button>
				</footer>
			</form>
		</div>
	);
};

AddPostForm.propTypes = {
	addFeedPost: PropTypes.func.isRequired,
};

export default connect(null, { addFeedPost, editPost })(AddPostForm);
