import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UploadImage from '../forms/UploadImage';
import image from '../../images/default.png';
import { connect } from 'react-redux';

const UserCard = ({ user }) => {
	return (
		user && (
			<Fragment>
				<section className='row card user-card'>
					<img
						className='user-card__image'
						src='https://cirque-connections-images.s3.us-west-1.amazonaws.com/d378aadd-0d4b-4e7b-9d0b-c2038002733e'
						alt='profile image'
					/>
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
						<span className='name'>{`${user.firstName} ${user.lastName}`}</span>{' '}
						<span className='location'>{user.location.address}</span>{' '}
						<span className='occupation'>{user.occupation}</span>
					</div>
				</section>
			</Fragment>
		)
	);
};

export default UserCard;
