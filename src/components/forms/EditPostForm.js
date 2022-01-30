import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPost } from '../../actions/post';


const EditPostForm = ({ editPost, toggleForm, post: { text, name, user, _id } }) => {
    const [ formData, setFormData ] = useState({
        text: '',
        name:  '',
        user:  '',
        id: ''
    });

    useEffect(() => {
        setFormData({
            text: text,
            name:  name,
            user:  user,
            id: _id
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
            editPost(formData);
            toggleForm();
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    

    return (
        <Fragment>
            <form onSubmit= {handleSubmit}>
                <textarea name="text" placeholder="Say whats on your mind..." value={formData.text} cols="45" rows="7" onChange={handleChange} required></textarea>
                <footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={toggleForm} >Close</button>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </footer>
            </form>
        </Fragment>
    );
}

EditPostForm.propTypes = {
    editPost: PropTypes.func.isRequired
}


export default connect(null, { editPost })(EditPostForm)
