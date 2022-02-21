import React, { Fragment } from 'react';
import ProfileCardText from './ProfileCardText';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultImage from '../../images/default.png';
import {
	approveConnection,
	denyConnection,
} from '../../redux/actions/connections';

const BrowseProfileCard = ({
	id,
	firstName,
	lastName,
	location,
	occupation,
	request,
	approveConnection,
	denyConnection,
}) => {
	const returnRequestActions = () => {
		return (
			<div className='actions'>
				<button onClick={() => approveConnection(id)}>Accept</button>
				<button onClick={() => denyConnection(id)}>Delete</button>
			</div>
		);
	};
	return (
		<Fragment>
			<section className='card profile-card'>
				<a href={`/profile/${id}`}>
					<img src={defaultImage} alt='' className='profile-card__image' />
					<section className='profile-card__info'>
						<ProfileCardText text={firstName + ' ' + lastName} />
						<ProfileCardText
							cName='location'
							text={'San Francisco, Bay Area, Ca'}
						/>
						<ProfileCardText cName='occupation' text={'Aerialist/Generalist'} />
					</section>
				</a>
				{request && returnRequestActions()}
			</section>
		</Fragment>
	);
};

BrowseProfileCard.propTypes = {
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, {
	approveConnection,
	denyConnection,
})(BrowseProfileCard);
