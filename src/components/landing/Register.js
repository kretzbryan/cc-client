import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'




const Register = ({ setAlert, register }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '', 
        email: '',
        password: '',
        password2: ''
    })
    
    const { firstName, lastName, username, email, password, password2 } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
    const onSubmit =  async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Does not match', 'danger')
        } else {
           register({ firstName, lastName, username, email, password })
           setFormData({
               firstName: '',
               lastName: '',
               username: '',
               email: '',
               password: '',
               password2: ''
           })
        }
    }


    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" placeholder='First Name' value={firstName} name='firstName' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Last Name' value={lastName} name='lastName' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Username' value={username} name="username" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder='Email Address' value={email} name="email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="password" value={password} name="password" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="re-type password" value={password2} name="password2" onChange={handleChange} required />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </Fragment>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
}

export default connect(null, { setAlert, register })(Register);

/* <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
                <form action="/register" method='POST'>
                <div className="form-group">
                    <input type="text" placeholder='First Name' value={firstName} name='firstName' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Last Name' value={lastName} name='lastName' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Username' value={username} name="username" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder='Email Address' value={email} name="email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="password" value={password} name="password" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="re-type password" value={password2} name="password" onChange={handleChange} required />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
                </form>
            </div>
        </div> */