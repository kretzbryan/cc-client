import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileCard from '../profile/ProfileCard';
import BrowseProfileCard from '../profile/BrowseProfileCard';
import { connect } from 'react-redux';
import { setDiscover } from '../../redux/actions/discover';

const DiscoverPeople = ({ people, setDiscover }) => {
	useEffect(() => {
		if (!people.length) {
			console.log('Theres no people!!!');
			setDiscover('people');
		}
	}, [people]);
	return (
		<>
			{people.length
				? people.map((person) => {
						return (
							<BrowseProfileCard
								firstName={person.firstName}
								lastName={person.lastName}
								location={person.location}
								occupation={person.occupation}
							/>
						);
				  })
				: null}
		</>
	);
};

DiscoverPeople.propTypes = {};

const mapStateToProps = (state) => ({
	people: state.discover.people.value,
});

export default connect(mapStateToProps, { setDiscover })(DiscoverPeople);
