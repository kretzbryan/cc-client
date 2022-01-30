import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const EventCard = ({ category, filter, start }) => {
	return (
		<div className='event__card'>
			<img
				src={`https://placeimg.com/640/480/${category}${
					filter ? `/${filter}` : null
				}`}
				alt=''
			/>
			<main className='event__card-main'>
				<h3 className='event__card-date'>{moment(start).format('LLL')}</h3>
				<h2 className='event__card-title'>Event Title</h2>
				<span className='event__card-location'>Online Event</span>
				<p>348 interested &#8226; 28 going </p>
			</main>
		</div>
	);
};

EventCard.propTypes = {};

export default EventCard;
