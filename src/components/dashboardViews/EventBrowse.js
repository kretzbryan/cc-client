import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import EventCard from '../event/EventCard';
import ToolBar from '../event/ToolBar';
import { setPopup } from '../../redux/actions/popup';
import { getEvents } from '../../redux/actions/event';

const EventBrowse = ({ setPopup, events, getEvents }) => {
	const [formOpen, toggleForm] = useState(false);
	// const categories = ['arch', 'nature', 'animals', 'tech'];
	// const filters = [null, 'grayscale', 'sepia'];
	// const [events, setEvents] = useState(null);
	const eventFormInfo = {
		name: 'event-info',
		headerValue: 'New Event',
		submitAction: null,
	};

	useEffect(() => {
		getEvents();
	}, []);
	return (
		<section className='event__browse-container'>
			<div className='subnav no-list'>
				<ToolBar type='event' />
				<a
					href='#event-info'
					className='add-event'
					onClick={() => setPopup(eventFormInfo)}>
					+
				</a>
			</div>

			{events.length && events.map((event) => <EventCard event={event} />)}
		</section>
	);
};
EventBrowse.propTypes = {
	getUserDashboard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	events: state.event.events,
});

export default connect(mapStateToProps, { setPopup, getEvents })(EventBrowse);
