import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UploadImage from '../forms/UploadImage';
import image from '../../images/default.png';

const UserCard = () => {
	return (
		<Fragment>
			<section className='row card user-card'>
				<img className='user-card__image' src={image} alt='profile image' />
				<div className='user-card__options-container'>
					<a
						className='edit__modal__anchor user-card__anchor'
						href='#'
						data-toggle='modal'
						data-target='#profilePhotoModal'>
						<p className='user-card__options'>edit photo</p>
					</a>
					<a
						className='edit__modal__anchor user-card__anchor'
						href='/dashboard/edit-profile'
						data-toggle='modal'
						data-target='#editModal'>
						<p className='user-card__options'>edit profile</p>
					</a>
				</div>
				<div className='user-info'>
					<span className='name'>Bryan Kretz</span>{' '}
					<span className='location'>San Francisco, Bay Area, Ca</span>{' '}
					<span className='occupation'>Aerialist/Generalist</span>
				</div>
			</section>
		</Fragment>
	);
};

export default UserCard;
