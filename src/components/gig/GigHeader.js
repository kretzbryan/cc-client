import React from 'react';
import image from 'images/default.png';

const GigHeader = ({ title, location }) => (
	<div className='row gig__header'>
		<div className='gig__thumb'>
			<a href='profile/<%=gig.author._id%>'>
				<img src={image} alt='' className='image__thumb' />
			</a>
		</div>
		<p className=' gig__name'>{title}</p>
		<p className=' gig__location'>{location}</p>
	</div>
);

export default GigHeader;
