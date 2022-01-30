import React from 'react';
import UserProfileCard from '../components/user/UserProfileCard';
import ProfileColumn from '../components/profile/ProfileColumn';
import GigColumn from '../components/gig/GigColumn';
import Popup from '../components/layout/Popup';
import UserCard from '../components/user/UserCard';
import GigNav2 from '../components/gig/GigNav2';
import GigNav1 from '../components/gig/GigNav1';
import CreatePostContainer from '../components/post/CreatePostContainer';
import UserCardMobile from '../components/user/UserCardMobile';
import DashboardNav from '../components/user/dashboard/DashboardNav';
const Browse = () => (
	<div className='row main__container'>
		<div className='column-secondary'>
			<UserCard />
			<DashboardNav />
		</div>
		<div className='column-primary'>
			<UserCardMobile />
			<ProfileColumn />
		</div>
		<div className='column-tertiary'>
			<GigNav1 />
		</div>
	</div>
);

export default Browse;
