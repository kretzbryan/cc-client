import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getTags } from '../../redux/actions/tags';

const EventForm = ({ tags, getTags }) => {
	const [data, setData] = useState({
		title: '',
		description: '',
		startDate: '',
		endDate: '',
		startTime: '',
		endTime: '',
		tags: [],
		location: {
			lat: '',
			long: '',
		},
		tagInput: '',
		mapInput: '',
	});

	const handleChange = async (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		try {
			setData({
				...data,
				[e.target.name]: e.target.value,
			});
			if (name === 'tagInput' && value.length > 2) {
				getTags(value);
			}
			if (name === 'mapInput' && value.length > 2) {
				getTags(value);
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	const onSubmit = (e) => {
		console.log('Submitted');
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={onSubmit} className={`form`} autoComplete='off'>
				<h2 className='form-title'>Sign In</h2>
				<div className='form__group'>
					<input
						type='text'
						placeholder='Title'
						name='title'
						className={'form__input'}
						onChange={handleChange}
					/>
					<label htmlFor='title' className={'form__label'}>
						Title
					</label>
				</div>
				<div className='form__group'>
					<input
						type='text'
						placeholder='Description'
						name='description'
						className={'form__input'}
						onChange={handleChange}
					/>
					<label htmlFor='description' className={'form__label'}>
						Description
					</label>
				</div>

				<div className='form__group'>
					<input
						type='date'
						placeholder='Start Date'
						name='startDate'
						className={'form__input'}
						onChange={handleChange}
					/>
					<label htmlFor='title' className={'form__label'}>
						Title
					</label>
				</div>
				<div className='form__group'>
					<input
						type='text'
						placeholder='End Date'
						name='endDate'
						className={'form__input'}
						onChange={handleChange}
					/>
					<label htmlFor='endDate' className={'form__label'}>
						Description
					</label>
				</div>

				<div className='form__group'>
					<input
						type='date'
						placeholder='Start Time'
						name='startTime'
						className={'form__input'}
						onChange={handleChange}
					/>
					<label htmlFor='startDate' className={'form__label'}>
						Start Date
					</label>
				</div>
				<div className='form__group'>
					<input
						type='text'
						placeholder='End Time'
						name='endTime'
						className={'form__input'}
						onChange={handleChange}
					/>
					<label htmlFor='endTime' className={'form__label'}>
						Description
					</label>
				</div>

				<div className='form__group'>
					<input
						type='date'
						placeholder='Tags'
						name='tagInput'
						className={'form__input'}
						onChange={handleChange}
					/>
					<label htmlFor='tagInput' className={'form__label'}>
						Tags
					</label>
				</div>
				<div className='form__group'>
					<input
						type='text'
						placeholder='Location'
						name='mapInput'
						className={'form__input'}
						onChange={handleChange}
					/>
					<label htmlFor='mapInput' className={'form__label'}>
						Location
					</label>
				</div>

				<button type='submit' className={`btn btn-primary`}>
					Submit
				</button>
			</form>
		</>
	);
};

EventForm.propTypes = {};
const mapStateToProps = (state) => ({
	tags: state.tags,
});

export default EventForm;
