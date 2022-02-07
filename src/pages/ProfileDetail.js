import React from 'react';
import PostColumn from '../components/post/PostColumn';
import UserProfileCard from '../components/user/UserProfileCard';
import { connect } from 'react-redux';
import auth from '../redux/actions/auth';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import UserCardMobile from '../components/user/UserCardMobile';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../redux/actions/profile';
import ProfileCard from '../components/profile/ProfileCard';
import GigNav1 from '../components/gig/GigNav1';
import GigNav2 from '../components/gig/GigNav2';
import { getUserPosts } from '../redux/actions/post';
import Popup from '../components/layout/Popup';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';

const ProfileDetail = ({
	getUserProfile,
	getUserPosts,
	auth,
	profile: { profile, loading },
	match,
}) => {
	let { id } = useParams();
	console.log('match.params.id', match.params.id.toString());

	useEffect(() => {
		getUserProfile(id);
		getUserPosts(match.params.id);
	}, []);

	return (
		<div className='row main__container user-profile'>
			<div className='user-info'>
				{!loading && <ProfileCard />}
				<GigNav2 />
			</div>
			<div className='column-primary'>
				<UserCardMobile />
				<PostColumn />
			</div>
			<div className='column-tertiary'>
				<GigNav1 />
				<Popup />
			</div>
		</div>
	);
};

ProfileDetail.propTypes = {
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	getUserProfile: PropTypes.func.isRequired,
	getUserPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
	post: state.post,
});

export default connect(mapStateToProps, { getUserProfile, getUserPosts })(
	redirectHOC(requireAuth(ProfileDetail))
);
