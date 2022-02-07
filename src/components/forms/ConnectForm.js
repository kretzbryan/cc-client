import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ConnectForm = ({ profile, toggleForm }) => {
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

	return (
		<Fragment>
			<form
				className='form'
				onSubmit={(e) => {
					e.preventDefault();
				}}>
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

ConnectForm.propTypes = {};

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
});

export default connect(mapStateToProps, null)(ConnectForm);
