import React, { Fragment } from 'react';
import CreatePostContainer from './CreatePostContainer';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const PostColumn = ({ posts, loading }) => {
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

const mapStateToProps = (state) => ({
	posts: state.post.posts,
	loading: state.post.loading,
});

export default connect(mapStateToProps, null)(PostColumn);
