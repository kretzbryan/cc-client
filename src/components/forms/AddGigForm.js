import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGig } from '../../actions/gig';

const GigForm = ({ toggleForm, addGig }) => {
    const [ formData, setFormData ] = useState({
        title: '',
        location: '',
        text: ''
    })

    const { title, location, text } = formData;
    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    } 

    return (
        <Fragment>
            <form onSubmit={ e => {
                e.preventDefault();
                addGig(formData);
                setFormData({
                    title: '',
                    location: '',
                    text: ''
                });
                toggleForm()
                }}>
                <div className="form-group">
                    <label className='label' htmlFor="location">Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='label' htmlFor="title">What are you offering?</label>
                    <input type="text" value={ formData.title } name="title" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='label' htmlFor="description">Description</label>
                    <textarea name="text" value={formData.text} onChange={handleChange} cols="25" rows="4"></textarea>
                </div>
                <footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </footer>
            </form>
        </Fragment>
    )
}

GigForm.propTypes = {
    addGig: PropTypes.func.isRequired
}

export default connect(null, { addGig })(GigForm)
