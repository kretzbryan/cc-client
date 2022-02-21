import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGig } from '../../redux/actions/gig';
import ImageInput from './ImageInput';
import FormGroup from './FormGroup';
import TagInput from './TagInput';
import { clearTags } from '../../redux/actions/tags';
import LocationInput from './LocationInput';
import SelectComponent from './SelectComponent';

const GigForm = ({ toggleForm, addGig, clearTags, locationResults }) => {
	const [formData, setFormData] = useState({
		title: '',
		location: {
			address: '',
			lng: '',
			lat: '',
			name: '',
		},
		tags: [],
		text: '',
		imageLocation: '',
		startDate: '',
		duration: {
			value: '',
			unitOfMeasure: 'months',
		},

		tagInput: '',
		mapInput: '',
		imageLocation: null,
	});

	const options = ['Days', 'Months'];

	const { title, location, text } = formData;

	const handleDuration = (e) => {
		setFormData({
			...formData,
			duration: {
				...formData.duration,
				[e.target.name]: e.target.value,
			},
		});
	};
	const handleChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
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
		setFormData({
			...formData,
			location,
			mapInput: address,
		});
	};

	const handleTagField = (tag, handleType) => {
		const newArray =
			handleType === 'add'
				? [...formData.tags, tag]
				: formData.tags.filter((tagItem) => tagItem._id !== tag._id);
		setFormData({
			...formData,
			tags: newArray,

			tagInput: '',
		});
		clearTags();
	};

	const handleImage = (imageLocation) => {
		setFormData({
			...formData,
			imageLocation,
		});
	};

	return (
		<Fragment>
			<form
				className='form'
				onSubmit={(e) => {
					e.preventDefault();
					addGig(formData);

					toggleForm();
				}}>
				<div className='form__row'>
					<FormGroup
						inputValue={formData.title}
						inputName='title'
						classNames={null}
						inputType='text'
						label='	What are you offering?'
						handleInputChange={handleChange}
					/>

					<LocationInput
						setLocation={setLocation}
						inputValue={formData.mapInput}
						handleInputChange={handleChange}
					/>
				</div>
				<div className='form__row'>
					<FormGroup
						inputValue={formData.startDate}
						inputName='startDate'
						classNames={null}
						inputType='date'
						label='Start Date'
						handleInputChange={handleChange}
					/>
					<ImageInput
						inputValue={formData.imageFile}
						handleImage={handleImage}
					/>
				</div>
				<div className='form__row'>
					<FormGroup
						inputValue={formData.duration.value}
						inputName='value'
						classNames={null}
						inputType='text'
						label='Length of Job'
						handleInputChange={handleDuration}
					/>
					<div className='form__group'>
						<label htmlFor={'units'} className={'form__label'}>
							Units:
						</label>
						<SelectComponent
							options={options}
							name='unitOfMeasure'
							value={formData.duration.unitOfMeasure}
							handleChange={handleDuration}
						/>
					</div>
				</div>
				<div className='form__group'>
					<label className='label' htmlFor='description'>
						Description
					</label>
					<textarea
						name='text'
						value={formData.text}
						onChange={handleChange}
						cols='25'
						rows='4'></textarea>
				</div>

				<div className='form__row tag-row'>
					<TagInput
						inputValue={formData.tagInput}
						addTag={null}
						handleInputChange={handleChange}
						handleTagField={handleTagField}
						addedTags={formData.tags}
					/>
				</div>
				<footer className='modal-footer'>
					<button type='submit' className='btn btn-primary'>
						Confirm
					</button>
				</footer>
			</form>
		</Fragment>
	);
};

GigForm.propTypes = {
	addGig: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	locationResults: state.location.results,
});
export default connect(mapStateToProps, { addGig, clearTags })(GigForm);
