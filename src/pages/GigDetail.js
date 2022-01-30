import React, { useEffect } from 'react';
import { getGig } from '../actions/gig';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GigCardShow from '../components/gig/GigCardShow';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';

const GigDetail = ({ gig, gigLoading, getGig, match }) => {
	console.log('gig detail', gig);
	useEffect(() => {
		getGig(match.params.id);
	}, [getGig]);

	return (
		<div className='row main__container'>
			<section className='column-secondary'>
				<UserCard />
				<DashboardNav />
			</section>
			<section className='column-primary'>
				{!gigLoading && <GigCardShow gig={gig} />}
			</section>
			<section className='column-tertiary'></section>
		</div>
	);
};

GigDetail.propTypes = {
	getGig: PropTypes.func.isRequired,
	gig: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	gig: state.gig.gig,
	gigLoading: state.gig.loading,
});

export default connect(mapStateToProps, { getGig })(GigDetail);
