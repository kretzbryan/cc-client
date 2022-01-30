import React from 'react'
import { useState } from 'react';
import { editProfileImage } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


const UploadImage = ({editProfileImage}) => {
    const [file, setFile] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        editProfileImage(file);
    }

    const onChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0])
    }

    return (
        <div>
        <form onSubmit={onSubmit} method="POST" encType="multipart/form-data">
        <label className='col' htmlFor="profileImage">Choose image</label>
        <input className='col' type="file" name='profileImage' value={file.selectedFile} onChange={onChange}/>
        <footer className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Add Photo</button>
        </footer>
    </form>
        </div>
    )
}

UploadImage.propTypes = {
    editProfileImage: PropTypes.func.isRequired
}

export default connect(null, {editProfileImage})(UploadImage)
