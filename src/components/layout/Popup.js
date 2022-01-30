import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../forms/Form';
import { clearForm } from '../../actions/form';

const Popup = ({ form: { name, headerValue }, clearForm }) => {
    const [formName, setFormName] = useState([]);
    const [formHeader, setFormHeader ] = useState([]);


    useEffect(() => {
        setFormName(name);
        setFormHeader(headerValue)
    })


    return (
        <div className='popup' id={name}>
            <div className="popup__content">
                <div className="popup__header">
                    <a href="#" className="popup__close" onClick={() => clearForm() }>&times;</a>
                    <h3 className='popup__header--text'>{formHeader}</h3>
                </div>
                {formName && <Form />}
            </div>
        </div>
    )
}

Popup.propTypes = {
    form: PropTypes.object.isRequired,
    clearForm: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    form: state.form
})

export default connect(mapStateToProps, {clearForm})(Popup)

