import React from 'react';
import spinner from '../../images/spinner.gif';

const Spinner = () => {
	return (
		<div>
			<img
				src='/images/spinner.gif'
				style={{ margin: 'auto', display: 'block' }}
				alt='Loading...'
			/>
		</div>
	);
};

export default Spinner;
