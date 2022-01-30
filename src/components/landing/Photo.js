import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import image from '../../images/andrea-dillon.jpg';

function Photo(props) {
	return (
		<Fragment>
			<img className='landing__photo' src={image} alt='' />
		</Fragment>
	);
}

Photo.propTypes = {};

export default Photo;
