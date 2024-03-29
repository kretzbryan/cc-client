import React, { Fragment } from 'react';
import ProfileCardText from './ProfileCardText';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultImage from '../../images/default.png';
import { setPopup } from '../../redux/actions/popup';
import { removeConnection } from '../../redux/actions/connections';

const ProfileCard = ({ profile, setPopup, user, removeConnection }) => {
	const { firstName, lastName, location, occupation } = profile;
	const connectFormInfo = {
		name: 'connect',
		headerValue: 'New Connection',
		submitAction: null,
	};

	const messageFormInfo = {
		name: 'send-message',
		headerValue: 'New Message',
		submitAction: null,
	};
	// const isConnection = true;
	const isConnection =
		user &&
		user.connections.confirmed.find(
			(connection) => connection._id === profile._id
		);

	return profile ? (
		<Fragment>
			<section className='card profile-card'>
				<img
					src={profile.profileImage || defaultImage}
					alt=''
					className='profile-card__image'
				/>
				<section className='profile-card__info'>
					<ProfileCardText text={firstName + ' ' + lastName} />
					<ProfileCardText text={`San Francisco, Bay Area, Ca`} />
					<ProfileCardText
						className='occupation'
						text={`Aerialist/Generalist`}
					/>
				</section>
				<section className='action-section'>
					{isConnection ? (
						<a href='#' onClick={() => removeConnection(profile._id, user)}>
							Remove
						</a>
					) : (
						<a href='#connect' onClick={() => setPopup(connectFormInfo)}>
							Connect
						</a>
					)}

					<a href='#send-message' onClick={() => setPopup(messageFormInfo)}>
						Message
					</a>
				</section>
			</section>
		</Fragment>
	) : null;
};

ProfileCard.propTypes = {
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
	user: state.auth.user,
});

export default connect(mapStateToProps, { setPopup, removeConnection })(
	ProfileCard
);
