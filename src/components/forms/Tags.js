import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ addedTags }) => {
	return (
		<div className='tags'>
			{addedTags.map((tag) => {
				return (
					<span>
						{tag.handle} <button className='remove-tag'>+</button>{' '}
					</span>
				);
			})}
		</div>
	);
};

Tags.propTypes = {};

export default Tags;
