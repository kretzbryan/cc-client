import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageInput from './ImageInput';
import FormGroup from './FormGroup';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/auth';
import Button from '../layout/Button';
import { post } from '../../utils/api';

const ProfileImageForm = ({ user, setUser }) => {
	const [file, setFile] = useState(null);
	const [fileName, setFileName] = useState('');

	const handleSetFile = (e) => {
		const { files } = e.target;
		const imageFile = files[0];
		console.log('imageFile', imageFile);
		let body = new FormData();
		body.append('image', imageFile);
		setFileName(imageFile.name);
		setFile(body);
	};

	const handleUploadImage = async () => {
		try {
			const authRequired = true;
			const res = await post('/api/data/user/image-upload', file, authRequired);
			setUser(res.data.user);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<form onSubmit={handleUploadImage}>
			<FormGroup
				inputValue={''}
				inputName='imageFile'
				classNames='image'
				inputType='file'
				label='Image'
				handleInputChange={handleSetFile}
			/>
			<footer className='modal-footer'>
				<button type='submit' className='btn btn-primary'>
					Confirm
				</button>
			</footer>
		</form>
	);
};

ProfileImageForm.propTypes = {};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, { setUser })(ProfileImageForm);
