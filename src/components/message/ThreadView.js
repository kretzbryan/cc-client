import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../images/default.png';
import Message from './Message';
import { connect } from 'react-redux';
import sendImage from '../../images/noun-send-1342298-2054A8.svg';

const ThreadView = ({ thread, authUser }) => {
	const isCreator = (message) => {
		if (authUser && authUser._id === message.createdBy._id) return true;
		else return false;
	};
	return (
		<div className='thread-view'>
			{/* <section>
				<button className='user-button'>
					<img src={defaultImage} alt='' className='nav-thumb' />
					<span>User Name</span>
				</button>
			</section> */}
			<header>
				<img src={defaultImage} alt='' className='nav-thumb' />
				<span>Re: Test Subject</span>
			</header>
			<div className='main'>
				<div className='message-body__container'>
					{thread.messages.map((message) => {
						return <Message message={message} creator={isCreator(message)} />;
					})}
				</div>
				<footer>
					<textarea name='name'></textarea>{' '}
					<button>
						<img src={sendImage} alt='' />
					</button>
				</footer>
			</div>
		</div>
	);
};

ThreadView.propTypes = {};

const mapStateToProps = (state) => ({
	authUser: state.auth.user,
});

export default connect(mapStateToProps, null)(ThreadView);
