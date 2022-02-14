import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';

const GeneralSettingsForm = ({
	user,
	handleAlert,
	onUniqueChange,
	loading,
	locationDisplay,
	results,
	setLocation,
}) => {
	const returnResults = () => {
		return results.map((result, index) => {
			return (
				<div className='result' onClick={() => setLocation(index)}>
					{`${result.name} ${result.formatted_address}`}
				</div>
			);
		});
	};

	const handleLocationResults = () => {
		if (loading) {
			return <Spinner />;
		} else if (results.length) {
			return returnResults();
		} else {
			return null;
		}
	};
	return (
		<>
			<form action='' autoComplete='off'>
				<div className='settings-item'>
					<span>Name:</span>
					<div className='input-area'>
						<div className='name'>
							<label htmlFor='firstName'>First Name</label>
							<input
								type='text'
								name='firstName'
								value={user.firstName}
								id=''
							/>
						</div>
						<div className='name'>
							<label htmlFor='firstName'>Last Name</label>
							<input type='text' name='lastName' value={user.lastName} id='' />
						</div>
					</div>
				</div>
				<div className='settings-item'>
					<span>Username:</span>
					<div className='input-area'>
						<input
							type='text'
							name='username'
							onChange={onUniqueChange}
							value={user.username}
							id=''
						/>
						{handleAlert('username')}
					</div>
				</div>
				<div className='settings-item'>
					<span>Email:</span>
					<div className='input-area'>
						<input
							type='text'
							name='email'
							onChange={onUniqueChange}
							value={user.email}
							id=''
						/>
						{handleAlert('email')}
					</div>
				</div>
				<div className='settings-item'>
					<span>Location:</span>
					<div className='input-area'>
						<input
							type='text'
							name='location'
							onChange={onUniqueChange}
							value={locationDisplay}
							id=''
						/>
						<div className='autofill-container'>{handleLocationResults()}</div>
					</div>
				</div>
				<div className='settings-item'>
					<span>Occupation:</span>
					<div className='input-area'>
						<input
							type='text'
							name='occupation'
							onChange={onUniqueChange}
							value={user.occupation}
							id=''
						/>
						{handleAlert('occupation')}
					</div>
				</div>
			</form>
		</>
	);
};

GeneralSettingsForm.propTypes = {};

const mapStateToProps = (state) => ({
	results: state.location.results,
	loading: state.location.loading,
});

export default connect(mapStateToProps, null)(GeneralSettingsForm);
