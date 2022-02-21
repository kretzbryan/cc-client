import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewSettings from './ReviewSettings';
import { post } from '../../../utils/api';
import { connect } from 'react-redux';

const GeneralSettings = ({ user }) => {
	const [edit, setEdit] = useState(false);
	const handleClick = async () => {
		if (edit) {
			try {
				const authRequired = true;
				const res = await post('/api/data/user/update', { user }, authRequired);
			} catch (err) {
				console.log(err.message);
			}
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

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(GeneralSettings);
