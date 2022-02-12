import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { getRecentGigs } from '../../redux/actions/gig';
import { connect } from 'react-redux';
import auth from '../../redux/reducers/auth';
import GigColumn from '../gig/GigColumn';

const GigBrowse = ({ getRecentGigs, authLoading, user }) => {
	useEffect(() => {
		getRecentGigs();
	}, []);

	return (
		<>
			<GigColumn />
			{/* <div className="column-tertiary">
            </div> */}
		</>
	);
};

GigBrowse.propTypes = {
	getRecentGigs: PropTypes.func.isRequired,
	authLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	authLoading: state.auth.loading,
	user: auth.user,
});

export default connect(mapStateToProps, { getRecentGigs })(GigBrowse);
