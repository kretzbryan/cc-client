import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import { post } from '../../utils/api';

const ImageInput = ({ inputValue }) => {
	const handleUploadImage = async (e) => {
		const { files } = e.target;
		const imageFile = files[0];
		let body = new FormData();
		body.append('imageFile', imageFile);
		try {
			const authRequired = true;
			const res = await post('/api/data/image/upload', body, authRequired);
			console.log(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<FormGroup
			inputValue={inputValue}
			inputName='imageFile'
			classNames='image'
			inputType='file'
			label='Image'
			handleInputChange={handleUploadImage}
		/>
	);
};

ImageInput.propTypes = {};

export default ImageInput;
