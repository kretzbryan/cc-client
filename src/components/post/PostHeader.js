import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setEditPost } from '../../redux/actions/form';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import { deletePost } from '../../redux/actions/post';
import image from '../../images/default.png';

const PostHeader = ({
	id,
	name,
	setEditPost,
	createdAt,
	toggleForm,
	deletePost,
}) => (
	<Fragment>
		<header className='row profile__header post__header'>
			<div className='poster__thumb'>
				<img src={image} alt='profile thumbnail' className='image__thumb' />
			</div>
			<div className='poster__name'>
				<a className='anchor' href='/profile/'>
					<p className='options'>{name}</p>
				</a>
				<span className='timestamp'>
					<ReactTimeAgo date={createdAt} s />
				</span>
			</div>

			<div className='content-options'>
				{/* <input type="checkbox" className="content-options__checkbox" id={`option-toggle${id}`}/>
                <label htmlFor={`option-toggle${id}`}>
                    <i className="fa fa-cog options user-options" aria-hidden="true" ></i>
                </label> */}
				<nav className='content-options__nav'>
					<ul className='content-options__list'>
						<a
							className='content-options__link'
							onClick={(e) => {
								e.preventDefault();
								deletePost(id);
							}}>
							<li className='content-options__item'>
								<i className='fas fa-trash-alt'></i>
								<span>Delete Post</span>
							</li>
						</a>
						<a
							className='content-options__link'
							href='#postForm'
							onClick={toggleForm}>
							<li className='content-options__item'>
								<i className='fas fa-user-edit'></i> <span>Edit Post</span>
							</li>
						</a>
					</ul>
				</nav>
			</div>
		</header>
	</Fragment>
);

PostHeader.propTypes = {
	setEditPost: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
};

export default connect(null, { setEditPost, deletePost })(PostHeader);

/* <div className="col-2 post__header-thumb">
                <img src={image} alt="" className="image__thumb" />
            </div>
            <div className="col-8 post__header-name">
                <a className='anchor' href="/profile/<%= post.author._id %>">
                    <p className='options'>{name}</p>
                </a>
            </div>
            <div className="col-2 post__header-options">
                <a className='anchor options' onClick={ (e) => deletePost(id) } type='button'>delete</a>
                <a className='anchor options' href='#editPost' onClick={() => setEditPost()}>edit post</a>
            </div> */
