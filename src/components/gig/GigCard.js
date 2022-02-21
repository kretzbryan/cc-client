import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import noImage from '../../images/noun-image-unavailable-4379574-2054A8.svg';

const GigCard = ({ gig }) => {
	return (
		<div className='gig__card'>
			<a href={`/gig/${gig._id}`} className='gig-card__anchor'>
				<section className='row card gig-card gig-card-browse'>
					{/* <div className='gig-card__thumb-container'> */}
					<img
						src={gig.imageLocation || noImage}
						alt=''
						className='gig-card__thumb'
					/>
					{/* </div> */}
					<section className=' gig-card__info'>
						<p className='gig-card__text'>{gig.title}</p>
						<p className='gig-card__text'>
							<span>{gig.location.address}</span>
						</p>
						<p className='timestamp'>
							posted: <ReactTimeAgo date={gig.createdAt} locale='en-US' />
						</p>
					</section>
				</section>
			</a>
		</div>
	);
};

export default GigCard;
