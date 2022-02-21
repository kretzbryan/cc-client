import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { post } from '../../utilsapi';

const ProfileRequestForm = ({ profile, toggleForm, connect }) => {
	const [formData, setFormData] = useState({
		recipients: [profile],
		subject: '',
		text: '',
	});

	const handleChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		try {
			let res;
			const authRequired = true;
			const { recipients, subject, text } = formData;
			const partiallyFilled = (subject && !text) || (text && !subject);
			const isValidForm = recipients.length && subject && text;
			if (connect) {
				if (partiallyFilled) {
					console.log('this is partially filled, clear or finish!');
				} else {
					res = await post(
						'/api/data/connection/new',
						{
							recipient: profile,
							message: isValidForm ? formData : null,
						},
						authRequired
					);
				}
			} else {
				res = await post(
					'/api/data/message/new-message-thread',
					{ message: { ...formData, messageType: 'direct' } },
					authRequired
				);
			}
		} catch (error) {}
	};

	return (
		<Fragment>
			<form
				className='form'
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}>
				{connect ? (
					<b>
						Would you like to send a message with your request? (leave blank if
						you choose not to)
					</b>
				) : null}
				<div className='form-group'>
					<span>To:</span>{' '}
					<span>
						{formData.recipients.map((recipient, index) => {
							return index === formData.recipients.length - 1
								? `${recipient.firstName} ${recipient.lastName}`
								: `${recipient.firstName} ${recipient.lastName}, `;
						})}
					</span>
				</div>
				<div className='form-group'>
					<label className='label' htmlFor='subject'>
						Subject
					</label>
					<input
						type='text'
						name='subject'
						value={formData.subject}
						onChange={handleChange}
					/>
				</div>

				<div className='form-group'>
					<label className='label' htmlFor='message'>
						Message:
					</label>
					<textarea
						name='text'
						value={formData.text}
						onChange={handleChange}></textarea>
				</div>
				<div className='modal-footer'>
					<button type='submit' className='btn btn-primary'>
						Confirm
					</button>
				</div>
			</form>
		</Fragment>
	);
};

ProfileRequestForm.propTypes = {};

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
});

export default connect(mapStateToProps, null)(ProfileRequestForm);
