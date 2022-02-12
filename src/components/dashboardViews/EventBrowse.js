import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import EventCard from '../event/EventCard';
import ToolBar from '../event/ToolBar';
import { setPopup } from '../../redux/actions/popup';

const EventBrowse = ({ setPopup }) => {
	const [formOpen, toggleForm] = useState(false);
	// const categories = ['arch', 'nature', 'animals', 'tech'];
	// const filters = [null, 'grayscale', 'sepia'];
	const [events, setEvents] = useState(null);
	const eventFormInfo = {
		name: 'event-info',
		headerValue: 'New Event',
		submitAction: null,
	};

	// useEffect(() => {
	// 	const results = [];
	// 	for (let num = 0; num < 25; num++) {
	// 		let randomDate, startDate, endDate;
	// 		randomDate = new Date();
	// 		randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 31));

	// 		startDate = new Date(randomDate);

	// 		startDate.setHours(startDate.getHours() + Math.floor(Math.random() * 23));

	// 		endDate = new Date(startDate);

	// 		const trimMinuteRange = (date) => {
	// 			const randomNumber = Math.floor(Math.random() * 2);
	// 			const mins = date.getMinutes();
	// 			const remainder = mins % 30;

	// 			return randomNumber ? mins - remainder : mins - remainder + 30;
	// 		};
	// 		startDate.setMinutes(trimMinuteRange(startDate));
	// 		endDate.setHours(endDate.getHours() + Math.floor(Math.random() * 6));

	// 		results.push({
	// 			category: categories[Math.floor(Math.random() * categories.length)],
	// 			filter: filters[Math.floor(Math.random() * filters.length)],
	// 			startDate,
	// 			endDate,
	// 		});
	// 	}

	// 	setEvents(results);
	// }, []);
	return (
		<>
			<div className='subnav no-list'>
				<ToolBar type='event' />
				<a
					href='#event-info'
					className='add-event'
					onClick={() => setPopup(eventFormInfo)}>
					+
				</a>
			</div>

			{events &&
				events.map((event) => (
					<EventCard
						category={event.category}
						filter={event.filter}
						start={event.startDate}
						end={event.endDate}
					/>
				))}
		</>
	);
};
EventBrowse.propTypes = {
	getUserDashboard: PropTypes.func.isRequired,
};

export default connect(null, { setPopup })(EventBrowse);
