import React from 'react';
import defaultImage from 'images/default.png';

const EditProfileCard = () => {
	return (
		<div className='profile-card'>
			<img
				className='profile-card__image'
				src={defaultImage}
				alt='profile image'
			/>
			<div className='profile-card__edit'>
				<div className='profile-card__edit__container'>
					<a href='#' className='edit__anchor'>
						<p className='options'>edit photo</p>
					</a>
					<a href='#' className='edit__anchor'>
						<p className='options'>edit profile</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default EditProfileCard;
