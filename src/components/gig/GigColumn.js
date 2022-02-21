import React, { useState, useEffect, Fragment } from 'react';
import GigCard from './GigCard';
import AddGigContainer from './AddGigContainer';
import { connect } from 'react-redux';
import { getGigs } from '../../redux/actions/gig';
import PropTypes from 'prop-types';

const GigColumn = ({ getGigs, gig: { gigs, loading } }) => {
	useEffect(() => {
		getGigs();
	}, [getGigs]);
	return (
		<div className='gig-browse'>
			{!loading && gigs.map((gig) => <GigCard key={gig._id} gig={gig} />)}
		</div>
	);
};

GigColumn.propTypes = {
	getGigs: PropTypes.func.isRequired,
	gig: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	gig: state.gig,
});

export default connect(mapStateToProps, { getGigs })(GigColumn);
