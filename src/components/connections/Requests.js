import React from 'react';
import PropTypes from 'prop-types';
import BrowseProfileCard from '../profile/BrowseProfileCard';

const Requests = ({ requests }) => {
	return (
		<>
			{' '}
			{requests &&
				requests.map((connection) => {
					return (
						<BrowseProfileCard
							profileImage={connection.profileImage}
							request={true}
							id={connection._id}
							firstName={connection.firstName}
							lastName={connection.lastName}
							location={connection.location}
							occupation={connection.occupation}
						/>
					);
				})}
		</>
	);
};

Requests.propTypes = {};

export default Requests;
