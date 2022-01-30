import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'

const EditGigForm = ({ gig, toggleForm }) => {
    const [ formData, setFormData ] = useState({
        title: '',
        location: '',
        text: '',
        id: ''
    })

    const { location, title, text } = formData;

    useEffect(()=> {
        const { location, title, text, _id } = gig
        setFormData({
            title,
            location,
            text,
            id: _id
        })
    }, [])

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
                setFormData({
                    title: '',
                    location: '',
                    text: '',
                    id: ''
                });
                toggleForm()
                }}>
                <div className="form-group">
                    <label className='label' htmlFor="location">Location</label>
                    <input type="text" name="location" value={ location } onChange={ handleChange } />
                </div>
                <div className="form-group">
                    <label className='label' htmlFor="title">What are you offering?</label>
                    <input type="text" value={ title } name="title" onChange={ handleChange } />
                </div>
                <div className="form-group">
                    <label className='label' htmlFor="description">Description</label>
                    <textarea name="text" value={ text } onChange={ handleChange } cols="25" rows="4"></textarea>
                </div>
                <footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={ toggleForm }>Close</button>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </footer>
            </form>
        </Fragment>
    )
}

EditGigForm.propTypes = {

}

export default EditGigForm
