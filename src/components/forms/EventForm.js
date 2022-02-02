import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTags } from '../../redux/actions/tags';
import {
	clearLocationResults,
	getLocations,
} from '../../redux/actions/location';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { post } from '../../utils/api';

const EventForm = ({
	tags,
	getTags,
	getLocations,
	results,
	loading,
	clearLocationResults,
}) => {
	const [data, setData] = useState({
		title: '',
		imageLocation: '',
		description: '',
		startDate: '',
		endDate: '',
		startTime: '',
		endTime: '',
		tags: [],
		location: {
			name: '',
			address: '',
			lat: '',
			long: '',
		},
		tagInput: '',
		mapInput: '',
		imageFile: null,
	});

	const handleChange = async (e) => {
		e.preventDefault();
		const { name, value, files } = e.target;
		try {
			setData({
				...data,
				[e.target.name]: e.target.value,
			});
			if (name === 'imageFile') {
				console.log('files', files[0]);
				const imageFile = files[0];
				let body = new FormData();

				body.append('imageFile', imageFile);
				console.log('body', body.get('imageFile'));
				handleUploadImage(body);
			}
			if (name === 'tagInput' && value.length > 2) {
				getTags(value);
			}
			if (name === 'mapInput' && value.length > 2) {
				getLocations(value);
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleUploadImage = async (imageFile) => {
		console.log('file', imageFile.get('imageFile'));
		try {
			const authRequired = true;
			const res = await post('/api/data/image/upload', imageFile, authRequired);
			console.log(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	const setLocation = (index) => {
		const { geometry, name, formatted_address: address } = results[index];
		let { location } = geometry;
		location = {
			...location,
			name,
			address,
		};
		setData({
			...data,
			location,
			mapInput: address,
		});
		clearLocationResults();
	};

	const returnResults = () => {
		return results.map((result, index) => {
			return (
				<div className='result' onClick={() => setLocation(index)}>
					{`${result.name} ${result.formatted_address}`}
				</div>
			);
		});
	};

	const handleLocationResults = () => {
		if (loading) {
			return <Spinner />;
		} else if (results.length) {
			return returnResults();
		} else {
			return null;
		}
	};

	const onSubmit = (e) => {
		console.log('Submitted');
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={onSubmit} className={`form`} autoComplete='off'>
				<div className='form__row'>
					<div className='form__group'>
						<label htmlFor='title' className={'form__label'}>
							Title:
						</label>
						<input
							type='text'
							name='title'
							value={data.title}
							className={'form__input'}
							onChange={handleChange}
						/>
					</div>
					<div className='form__group'>
						<label htmlFor='mapInput' className={'form__label'}>
							Location:
						</label>
						<input
							type='text'
							name='mapInput'
							value={data.mapInput}
							className={'form__input'}
							onChange={handleChange}
						/>
						<div className='autofill-container'>{handleLocationResults()}</div>
					</div>
				</div>

				<div className='form__row'>
					<div className='form__group text-area'>
						<label htmlFor='description' className={'form__label'}>
							Description:
						</label>
						<textarea
							name='description'
							cols='30'
							rows='10'
							value={data.description}
							onChange={handleChange}></textarea>
					</div>
					<div className='form__group image'>
						<label htmlFor='imageFile' className={'form__label'}>
							Image:
						</label>
						<input
							type='file'
							name='imageFile'
							value={data.imageFile}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='form__row'>
					<div className='form__group'>
						<label htmlFor='title' className={'form__label'}>
							Start Date:
						</label>
						<input
							type='date'
							placeholder='Start Date'
							name='startDate'
							value={data.startDate}
							className={'form__input'}
							onChange={handleChange}
						/>
					</div>
					<div className='form__group'>
						<label htmlFor='startDate' className={'form__label'}>
							Start Time:
						</label>
						<input
							type='time'
							placeholder='Start Time'
							name='startTime'
							value={data.startTime}
							className={'form__input'}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='form__row'>
					<div className='form__group'>
						<label htmlFor='endDate' className={'form__label'}>
							End Date:
						</label>
						<input
							type='date'
							value={data.endDate}
							name='endDate'
							className={'form__input'}
							onChange={handleChange}
						/>
					</div>
					<div className='form__group'>
						<label htmlFor='endTime' className={'form__label'}>
							End Time
						</label>
						<input
							type='time'
							name='endTime'
							value={data.endTime}
							className={'form__input'}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='form__row'>
					<div className='form__group'>
						<label htmlFor='tagInput' className={'form__label'}>
							Tags:
						</label>
						<input
							type='text'
							name='tagInput'
							value={data.tagInput}
							className={'form__input'}
							onChange={handleChange}
						/>
					</div>
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
	results: state.location.results,
	loading: state.location.loading,
});

export default connect(mapStateToProps, {
	getLocations,
	getTags,
	clearLocationResults,
})(EventForm);
