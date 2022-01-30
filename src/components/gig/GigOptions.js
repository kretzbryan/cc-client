import React from 'react';
import { deleteGig } from '../../actions/gig';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const GigOptions = ({ deleteGig, toggleForm }) => (
    <div className='options__footer'>
        <a className='options' href="#" onClick={deleteGig}><i className="fas fa-trash-alt"></i></a>
        <a className='options' onClick={ toggleForm }><i className="fas fa-user-edit"></i></a>
    </div>
)

GigOptions.propTypes = {
    deleteGig: PropTypes.func.isRequired
}

export default connect(null, { deleteGig })(GigOptions);