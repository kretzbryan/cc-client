import React, { Fragment } from 'react';
import ProfileCardText from './ProfileCardText';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultImage from '../../images/default.png';

const ProfileCard = ({ firstName, lastName, location, occupation }) => {
	return (
		<Fragment>
			<section className='card profile-card'>
				<img src={defaultImage} alt='' className='profile-card__image' />
				<section className='profile-card__info'>
					<ProfileCardText text={firstName + ' ' + lastName} />
					<ProfileCardText text={location} />
					<ProfileCardText className='occupation' text={occupation} />
				</section>
			</section>
		</Fragment>
	);
};

ProfileCard.propTypes = {
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps)(ProfileCard);
