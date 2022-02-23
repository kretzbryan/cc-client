import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UploadImage from '../forms/UploadImage';
import image from '../../images/default.png';
import { connect } from 'react-redux';
import { setPopup } from '../../redux/actions/popup';

const UserCard = ({ user, setPopup }) => {
	const editPhoto = {
		name: 'profile-image',
		headerValue: 'Profile Image',
		submitAction: null,
	};
	return user ? (
		<Fragment>
			<section className='row card user-card'>
				<img
					className='user-card__image'
					src={user.profileImage || image}
					alt='profile image'
				/>
				<div className='user-card__options-container'>
					<a
						className='edit__modal__anchor user-card__anchor'
						href='#profile-image'
						onClick={() => setPopup(editPhoto)}>
						<p className='user-card__options'>edit photo</p>
					</a>
					<a className='edit__modal__anchor user-card__anchor' href='/settings'>
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
	) : null;
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, { setPopup })(UserCard);
