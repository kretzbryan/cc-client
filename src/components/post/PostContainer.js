import React, { Fragment, useEffect, useState } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditPostForm from '../forms/EditPostForm';
import Comment from '../comment/Comment';
import AddPostForm from '../forms/AddPostForm';

const PostContainer = ({ post, loading }) => {
	const { name, text, _id, createdBy, createdAt, comments } = post;
	const { firstName, lastName } = createdBy;
	const [formOpen, setFormOpen] = useState(false);
	console.log('post', post);

	const toggleForm = () => {
		setFormOpen(!formOpen);
	};

	return (
		<Fragment>
			<section className='row card post__container'>
				{!loading && (
					<Fragment>
						<PostHeader
							name={`${firstName} ${lastName}`}
							id={_id}
							post={post}
							createdAt={createdAt}
							toggleForm={toggleForm}
						/>
						{formOpen ? (
							<EditPostForm post={post} toggleForm={toggleForm} />
						) : (
							<PostContent text={text} />
						)}
						{!loading &&
							comments.map((comment) => {
								return (
									<Comment
										key={comment._id}
										comment={comment}
										loading={loading}
										postId={post._id}
									/>
								);
							})}
						<PostFooter postId={_id} user={createdBy} />
					</Fragment>
				)}
			</section>
		</Fragment>
	);
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(PostContainer);

/* { !editPostOpen ? (
    <div className="post">
        <PostHeader name={name}  post={post}/>
        <PostContent text={text} />
        <PostFooter id={_id} user={user} toggleEditPost={toggleEditPost}/>
    </div>) : ( <div className="post">
                    <PostHeader name={name}  />
                    <EditPostForm post={post} toggleEditPost={toggleEditPost} />
                </div>) } */
