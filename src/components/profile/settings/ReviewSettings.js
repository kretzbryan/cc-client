import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as EmailValidator from 'email-validator';
import { editUserField } from '../../../redux/actions/auth';
import { post } from '../../../utilsapi';
import Spinner from '../../layout/Spinner';
import {
	clearLocationResults,
	getLocations,
} from '../../../redux/actions/location';
import GeneralSettingsForm from '../../forms/GeneralSettingsForm';

EmailValidator.validate('test@email.com'); // true

const ReviewSettings = ({
	user,
	edit,
	editUserField,
	results,
	loading,
	getLocations,
	clearLocationResults,
}) => {
	const [isUnique, setIsUnique] = useState({
		username: true,
		email: true,
	});
	const [uniqueAlerts, setUniqueAlerts] = useState({
		username: '',
		email: '',
	});
	const [locationDisplay, setLocationDisplay] = useState('');

	const handleAlert = (name) => {
		return uniqueAlerts[name] ? (
			<span className={isUnique[name] ? 'green' : 'red'}>
				{uniqueAlerts[name]}
			</span>
		) : null;
	};
	const onUniqueChange = async (e) => {
		const { name, value } = e.target;
		editUserField(name, value);

		let valid = false;
		if (name === 'location') {
			setLocationDisplay(value);
			if (value.length > 2) getLocations(value);
		}
		if (name === 'username' && value.length >= 6) {
			valid = true;
		}
		if (name === 'email') {
			valid = EmailValidator.validate(value);
		}

		if (valid) {
			try {
				const authRequired = true;
				const res = await post(
					`/api/data/user/check-unique-field`,
					{ key: name, value },
					authRequired
				).catch((err) => {
					throw {
						message: err.message,
					};
				});

				if (res.data.unique) {
					setIsUnique({
						...isUnique,
						[name]: true,
					});
					setUniqueAlerts({
						...uniqueAlerts,
						[name]: `This ${name} is available to use!`,
					});
				} else {
					setIsUnique({
						...isUnique,
						[name]: false,
					});
					setUniqueAlerts({
						...uniqueAlerts,
						[name]: `Please try a different ${name}.`,
					});
				}
			} catch (err) {
				console.log(err.message);
			}
		}
	};

	const setLocation = (index) => {
		const { geometry, name, formatted_address: address } = results[index];
		let { location } = geometry;
		location = {
			...location,
			name,
			address,
		};
		setLocationDisplay(address);
		editUserField('location', location);
		clearLocationResults();
	};

	const handleWindow = () => {
		if (edit) {
			return (
				<GeneralSettingsForm
					user={user}
					handleAlert={handleAlert}
					onUniqueChange={onUniqueChange}
					locationDisplay={locationDisplay}
					setLocation={setLocation}
				/>
			);
		} else {
			return (
				<>
					<div className='settings-item'>
						<span>Name:</span>
						<span className='value'>{`${user.firstName} ${user.lastName}`}</span>
					</div>
					<div className='settings-item'>
						<span>Username:</span>
						<span className='value'>{user.username}</span>
					</div>
					<div className='settings-item'>
						<span>Email:</span>
						<span className='value'>{user.email}</span>
					</div>
					<div className='settings-item'>
						<span>Location</span>
						<span className='value'>
							{user.location && user.location.address}
						</span>
					</div>
					<div className='settings-item'>
						<span>Occupation</span>
						<span className='value'>{user.occupation && user.occupation}</span>
					</div>
				</>
			);
		}
	};

	useEffect(() => {
		if (user && user.location && user.location.address) {
			setLocationDisplay(user.location.address);
		}
	}, []);
	return <>{user ? handleWindow() : null}</>;
};

ReviewSettings.propTypes = {};

const mapStateToProps = (state) => ({
	user: state.auth.user,
	results: state.location.results,
	loading: state.location.loading,
});

export default connect(mapStateToProps, {
	editUserField,
	clearLocationResults,
	getLocations,
})(ReviewSettings);
