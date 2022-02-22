import React, { useEffect } from 'react';
import { getGig } from '../redux/actions/gig';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GigCardShow from '../components/gig/GigCardShow';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';

const GigDetail = ({ gig, gigLoading, getGig, match }) => {
	console.log('gig detail', gig);
	useEffect(() => {
		getGig(match.params.id);
	}, [getGig]);

	return <>{!gigLoading && <GigCardShow gig={gig} />}</>;
};

GigDetail.propTypes = {
	getGig: PropTypes.func.isRequired,
	gig: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	gig: state.gig.gig,
	gigLoading: state.gig.loading,
});

export default connect(mapStateToProps, { getGig })(
	redirectHOC(requireAuth(GigDetail))
);
