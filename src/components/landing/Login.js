import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault();
        login(username, password)
    }

    if(isAuthenticated) {
        return <Redirect to='/home' />
    }
    
    return (
        <Fragment>
            <form onSubmit={onSubmit} method='POST' className='login-form' autoComplete='off'>
                <div className="login-form__group">
                    <input type="text" name='username' id='username' className='login-form__input' onChange={handleChange} placeholder='Username' minLength='6' required/>
                    <label htmlFor="username" className='login-form__label'>Username</label>
                </div>
                <div className="login-form__group">
                    <input type="password" name='password' id='password' className='login-form__input' onChange={handleChange} placeholder='Password' minLength='6' required/>
                    <label htmlFor="password" className='login-form__label' >Password</label>
                </div>
                <button type="submit" className="btn form-button login-form__button">Log In</button>
            </form>
            <p className='login-form__footer'>Not already a member? <a href="#" className="signup_link">Sign up here</a> </p>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login);