import React, { Fragment } from 'react';
import { getPosts } from '../../redux/actions/post';
import CreatePostContainer from './CreatePostContainer';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const PostColumn = ({ profileId, getPosts, posts, loading }) => {
	console.log('posts', posts);
	return (
		<Fragment>
			<div className='post-section'>
				<CreatePostContainer />
				{loading ? (
					<Spinner />
				) : (
					posts.map((post) => {
						return (
							<PostContainer key={post._id} post={post} loading={loading} />
						);
					})
				)}
			</div>
		</Fragment>
	);
};

PostColumn.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	posts: state.post.posts,
	loading: state.post.loading,
});

export default connect(mapStateToProps, { getPosts })(PostColumn);
