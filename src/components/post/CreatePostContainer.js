import React, { Fragment, useState } from 'react';
import AddPostForm from '../forms/AddPostForm';
import image from '../../images/default.png';
import { connect } from 'react-redux';

const CreatePostContainer = ({ user }) => {
	const [formOpen, setFormOpen] = useState(false);

	const toggleForm = () => {
		setFormOpen(!formOpen);
	};

	return (
		<Fragment>
			<section className='row card create__post'>
				<img
					src={(user && user.profileImage) || image}
					alt='profile thumbnail'
					className='create__post__thumb'
				/>
				<a onClick={toggleForm} className='create__post__caption anchor'>
					<p className='options'>Say Something!</p>
				</a>
			</section>
			{formOpen === true && <AddPostForm toggleForm={toggleForm} />}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(CreatePostContainer);
