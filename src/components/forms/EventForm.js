import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { clearTags, getTags } from '../../redux/actions/tags';
import { getLocations } from '../../redux/actions/location';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { post } from '../../utilsapi';
import FormGroup from './FormGroup';
import LocationInput from './LocationInput';
import ImageInput from './ImageInput';
import TagInput from './TagInput';

const EventForm = ({
	tags,
	getTags,
	getLocations,
	locationResults,
	loading,
	clearTags,
}) => {
	const [data, setData] = useState({
		title: 'Dummy Title',
		imageLocation:
			'https://s3-us-west-1.amazonaws.com/cirque-connections-images/4d972733-84ec-44fd-9146-0d58dc3e9035',
		description:
			'This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. ',
		startDate: '2022-03-03',
		endDate: '2022-03-05',
		startTime: '08:00',
		endTime: '08:00',
		tags: [],
		location: {
			address: 'Oakland, CA, USA',
			lng: '-122.2711639',
			lat: '37.8043514',
			name: 'Oakland',
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
			if (value.length > 2) {
				// if (name === 'tagInput') {
				// 	getTags(value);
				// }
				if (name === 'mapInput') {
					getLocations(value);
				}
			}
		} catch (err) {
			console.log(err.message);
		}
	};
	const handleImage = (imageLocation) => {
		setData({
			...data,
			imageLocation,
		});
	};

	const handleTagField = (tag, handleType) => {
		const newArray =
			handleType === 'add'
				? [...data.tags, tag]
				: data.tags.filter((tagItem) => tagItem._id !== tag._id);
		setData({
			...data,
			tags: newArray,

			tagInput: '',
		});
		clearTags();
	};

	const setLocation = (index) => {
		const {
			geometry,
			name,
			formatted_address: address,
		} = locationResults[index];
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
	};

	const onSubmit = async (e) => {
		console.log('Submitted');
		e.preventDefault();
		try {
			const authRequired = true;
			const res = await post('api/data/event/create', data, authRequired);
			console.log('Success!');
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<form className={`form`} onSubmit={onSubmit} autoComplete='off'>
				<div className='form__row'>
					<FormGroup
						inputValue={data.title}
						inputName='title'
						classNames={null}
						inputType='text'
						label='Title'
						handleInputChange={handleChange}
					/>
					<LocationInput
						setLocation={setLocation}
						inputValue={data.mapInput}
						handleInputChange={handleChange}
					/>
				</div>

				<div className='form__row description'>
					<FormGroup
						inputValue={data.description}
						inputName='description'
						classNames='text-area'
						inputType='text-area'
						label='Description'
						handleInputChange={handleChange}
					/>

					<ImageInput inputValue={data.imageFile} handleImage={handleImage} />
				</div>
				<div className='form__row'>
					<FormGroup
						inputValue={data.startDate}
						inputName='startDate'
						classNames={null}
						inputType='date'
						label='Start Date'
						handleInputChange={handleChange}
					/>

					<FormGroup
						inputValue={data.startTime}
						inputName='startTime'
						classNames={null}
						inputType='time'
						label='Start Time'
						handleInputChange={handleChange}
					/>
				</div>
				<div className='form__row'>
					<FormGroup
						inputValue={data.endDate}
						inputName='endDate'
						classNames={null}
						inputType='date'
						label='End Date'
						handleInputChange={handleChange}
					/>

					<FormGroup
						inputValue={data.endTime}
						inputName='endTime'
						classNames={null}
						inputType='time'
						label='End Time'
						handleInputChange={handleChange}
					/>
				</div>

				<div className='form__row tag-row'>
					<TagInput
						inputValue={data.tagInput}
						addTag={null}
						handleInputChange={handleChange}
						handleTagField={handleTagField}
						addedTags={data.tags}
					/>
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
	locationResults: state.location.results,
});

export default connect(mapStateToProps, {
	getLocations,
	getTags,
	clearTags,
})(EventForm);
