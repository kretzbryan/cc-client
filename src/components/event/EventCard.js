import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import noImage from '../../images/noun-image-unavailable-4379574-2054A8.svg';

const EventCard = ({ event }) => {
	console.log(event);
	const { imageLocation, startTime, startDate, endTime, endDate } = event;
	return (
		<div className='event__card'>
			<a href=''>
				<img src={imageLocation || noImage} alt='' />
				<main className='event__card-main'>
					<h3 className='event__card-date'></h3>
					<h2 className='event__card-title'>Event Title</h2>
					<span className='event__card-location'>Online Event</span>
					<p>348 interested &#8226; 28 going </p>
				</main>
			</a>
		</div>
	);
};

EventCard.propTypes = {};

export default EventCard;
