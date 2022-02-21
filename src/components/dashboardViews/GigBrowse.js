import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { getRecentGigs } from '../../redux/actions/gig';
import { connect } from 'react-redux';
import auth from '../../redux/reducers/auth';
import GigColumn from '../gig/GigColumn';
import ToolBar from '../event/ToolBar';
import { setPopup } from '../../redux/actions/popup';

const GigBrowse = ({ getRecentGigs, authLoading, user, setPopup }) => {
	const gigFormInfo = {
		name: 'gig-info',
		headerValue: 'New Gig',
		submitAction: null,
	};
	useEffect(() => {
		getRecentGigs();
	}, []);

	return (
		<>
			<div className='subnav no-list'>
				<ToolBar type='event' />
				<a
					href='#gig-info'
					className='add-event'
					onClick={() => setPopup(gigFormInfo)}>
					+
				</a>
			</div>
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

export default connect(mapStateToProps, { getRecentGigs, setPopup })(GigBrowse);
