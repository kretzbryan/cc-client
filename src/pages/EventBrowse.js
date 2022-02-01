import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import GigNav2 from '../components/gig/GigNav2';
import UserCardMobile from '../components/user/UserCardMobile';
import PostColumn from '../components/post/PostColumn';
import MediaCard from '../components/MediaCard';

import { getUserDashboard } from '../redux/actions/profile';
import { connect } from 'react-redux';
import EventCard from '../components/event/EventCard';
import ToolBar from '../components/event/ToolBar';
import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
const EventBrowse = ({ getUserDashboard }) => {
	const [formOpen, toggleForm] = useState(false);
	const categories = ['arch', 'nature', 'animals', 'tech'];
	const filters = [null, 'grayscale', 'sepia'];
	const events = [];
	for (let num = 0; num < 25; num++) {
		let randomDate = new Date();
		randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 31));
		console.log('randomDate', randomDate);
		let startDate = new Date(randomDate);
		console.log('start date', startDate);
		startDate.setHours(startDate.getHours() + Math.floor(Math.random() * 23));

		let endDate = new Date(startDate);
		const trimMinuteRange = (date) => {
			const randomNumber = Math.floor(Math.random() * 2);
			const mins = date.getMinutes();
			const remainder = mins % 30;
			return randomNumber ? mins - remainder : mins - remainder + 30;
		};
		startDate.setMinutes(trimMinuteRange(startDate));
		endDate.setHours(endDate.getHours() + Math.floor(Math.random() * 6));
		events.push({
			category: categories[Math.floor(Math.random() * categories.length)],
			filter: filters[Math.floor(Math.random() * filters.length)],
			startDate,
			endDate,
		});
	}
	useEffect(() => {
		getUserDashboard();
	}, []);
	return (
		<div className='row main__container'>
			<section className='column-secondary'>
				<UserCard />
				<DashboardNav />
				<GigNav2 />
			</section>
			<section className='event__browse-container'>
				<UserCardMobile />
				{/* <a className='nav-link' href='#gigForm'>
					Add Gig
				</a> */}
				<a href='#gigForm' className='add-event'>
					+
				</a>
				<ToolBar type='event' />

				{events.map((event) => (
					<EventCard
						category={event.category}
						filter={event.filter}
						start={event.startDate}
						end={event.endDate}
					/>
				))}
			</section>
		</div>
	);
};
EventBrowse.propTypes = {
	getUserDashboard: PropTypes.func.isRequired,
};

export default connect(null, { getUserDashboard })(
	redirectHOC(requireAuth(EventBrowse))
);
