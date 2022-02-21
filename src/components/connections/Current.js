import React from 'react';
import PropTypes from 'prop-types';
import BrowseProfileCard from '../profile/BrowseProfileCard';

const Current = ({ current }) => {
	return (
		<>
			{current &&
				current.map((connection) => {
					return (
						<BrowseProfileCard
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

Current.propTypes = {};

export default Current;
