import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewSettings from './ReviewSettings';

const GeneralSettings = (props) => {
	const [edit, setEdit] = useState(false);
	const handleClick = async () => {
		if (edit) {
			setEdit(false);
		} else {
			setEdit(true);
		}
	};
	return (
		<div className='settings-general'>
			<header>
				<b>General Settings</b>
				<button onClick={handleClick}>{edit ? 'Save' : 'Edit'}</button>
			</header>
			<ReviewSettings edit={edit} />
		</div>
	);
};

GeneralSettings.propTypes = {};

export default GeneralSettings;
