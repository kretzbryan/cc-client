import React, { Fragment } from 'react';
import CreatePostContainer from './CreatePostContainer';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const PostColumn = ({ loading, feed }) => {
	return (
		<Fragment>
			<div className='post-section'>
				<CreatePostContainer />
				{loading ? (
					<Spinner />
				) : (
					feed.map((item) => {
						return (
							<PostContainer key={item._id} post={item} loading={loading} />
						);
					})
				)}
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	feed: state.feed.feed,
	loading: state.feed.loading,
});

export default connect(mapStateToProps, null)(PostColumn);
