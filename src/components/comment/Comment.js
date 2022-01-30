import React, { Fragment, useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import { deletePostComment } from '../../actions/post';
import EditCommentForm from '../forms/EditCommentForm';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Comment = ({ comment, loading, postId, deletePostComment }) => {
	const { _id, text, name, user, createdAt } = comment;
	const [commentFormOpen, setCommentFormOpen] = useState(false);

	const toggleForm = () => {
		setCommentFormOpen(!commentFormOpen);
	};

	const handleCommentDelete = (e) => {
		e.preventDefault();
		deletePostComment(postId, _id);
	};

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
				<Fragment>
					<section className='row comment mt-2'>
						<header className='row profile__header'>
							<div className='comment__thumb'>
								<img
									src='/images/default.png'
									alt='profile thumbnail'
									className='comment__thumb'
								/>
							</div>
							<div className='poster__name'>
								<a className='anchor' href='/profile/'>
									<p className='options'>{name}</p>
								</a>
								<span className='timestamp'>
									<ReactTimeAgo date={createdAt} locale='en-US' />
								</span>
							</div>
							<div className='content-options'>
								{/* <input type="checkbox" className="content-options__checkbox" id={`option-toggle${_id}`} />
                    <label htmlFor={`option-toggle${_id}`}>
                        <i className="fa fa-cog options user-options" aria-hidden="true" ></i>
                    </label> */}
								<nav className='content-options__nav'>
									<ul className='content-options__list'>
										<a
											className='content-options__link'
											href='#'
											onClick={handleCommentDelete}>
											<li className='content-options__item'>
												<i className='fas fa-trash-alt'></i>
												<span>Delete Comment</span>
											</li>
										</a>
										<a
											className='content-options__link'
											href='#'
											onClick={toggleForm}>
											<li className='content-options__item'>
												<i className='fas fa-user-edit'></i>{' '}
												<span>Edit Comment</span>
											</li>
										</a>
									</ul>
								</nav>
							</div>
						</header>
						{!commentFormOpen ? (
							<div className='comment__text'>
								<p>{text}</p>
							</div>
						) : (
							<EditCommentForm
								text={text}
								commentId={_id}
								postId={postId}
								toggleForm={toggleForm}
							/>
						)}
					</section>
				</Fragment>
			)}
		</Fragment>
	);
};

Comment.propTypes = {
	deletePostComment: PropTypes.func.isRequired,
};

export default connect(null, { deletePostComment })(Comment);

/* loading && (<Fragment>
    <section className="row comment mt-2"> 
    <header className="row profile__header">
        <div className="comment__thumb">
            <img src="images/default.png" alt="profile thumbnail" className="comment__thumb"/>
        </div>
        <div className="poster__name">
        <a className='anchor' href="/profile/">
            <p className='options'>{name}</p>
        </a>
        <span className='timestamp' > 

            24h
        </span>
        </div>
        <div className="content-options">
            <input type="checkbox" className="content-options__checkbox" id='option-toggle<%= comment._id %>' />
            <label htmlFor="option-toggle<%= comment._id %>">
                <i className="fa fa-cog options user-options" aria-hidden="true" ></i>
            </label>
            <nav className="content-options__nav">
                <ul className="content-options__list">
                    <a className='content-options__link' href="#" data-target="#delete<%= comment._id %>CommentModal" data-toggle="modal">
                    <li className="content-options__item">
                        <i className="fas fa-trash-alt"></i><span>Delete Comment</span>
                    </li>
                    </a>
                        <a className='content-options__link' href="#">
                            <li className="content-options__item">
                                <i className="fas fa-user-edit"></i> <span>Edit Comment</span> 
                        </li>
                    </a>
                </ul>
            </nav>
        </div>
    </header>
    <div className="comment__text">
        <p>This is hardcoded comment text</p>
    </div>
    </section> 
    </Fragment>)}s */
