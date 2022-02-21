import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setPopup } from '../../redux/actions/popup';
import noImage from '../../images/noun-image-unavailable-4379574-2054A8.svg';

const GigCardShow = ({ gig, setPopup }) => {
	const { title, location, name, text, createdBy, imageLocation } = gig;
	const messageFormInfo = {
		name: 'send-message',
		headerValue: 'New Message',
		submitAction: null,
	};
	console.log(setPopup);

	return (
		<Fragment>
			<section className='card gig-card-show'>
				<header className='row gig-card-show__header'>
					<div className='gig-card-show__image-container'>
						<img
							className='gig-card-show__image'
							src={imageLocation || noImage}
							alt='profile image'
						/>
					</div>

					<div className=' gig-card-show__header-details'>
						<div className='detail-container'>
							<p className='gig-card-show__title'>{title}</p>
							<p>{location.address}</p>
							<p>
								<a className='options' href={`/profile/${createdBy._id}`}>
									{`${createdBy.firstName} ${createdBy.lastName}`}
									{name}
								</a>
							</p>
							<a
								className='message'
								href='#send-message'
								onClick={() => setPopup(messageFormInfo)}>
								Message
							</a>
						</div>
					</div>
				</header>
				<section className='row gig-card-show__main'>
					<p> {text}</p>
				</section>
			</section>
		</Fragment>
	);
};

export default connect(null, { setPopup })(GigCardShow);
