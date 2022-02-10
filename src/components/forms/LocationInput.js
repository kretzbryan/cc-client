import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	clearLocationResults,
	getLocations,
} from '../../redux/actions/location';
import Spinner from '../layout/Spinner';
import FormGroup from './FormGroup';
import { connect } from 'react-redux';

const LocationInput = ({
	results,
	loading,
	setLocation,
	clearLocationResults,
	inputValue,
	handleInputChange,
	getLocations,
}) => {
	const handleLocationResults = () => {
		if (loading) {
			return <Spinner />;
		} else if (results.length) {
			return results.map((result, index) => {
				return (
					<div
						className='result'
						onClick={() => {
							setLocation(index);
							clearLocationResults();
						}}>
						{`${result.name} ${result.formatted_address}`}
					</div>
				);
			});
		} else {
			return null;
		}
	};

	useEffect(() => {
		let timer = setTimeout(() => {
			if (inputValue) {
				getLocations(inputValue);
			}
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [inputValue]);

	return (
		<FormGroup
			inputValue={inputValue}
			inputName='mapInput'
			classNames={null}
			inputType='text'
			label='Location'
			handleInputChange={handleInputChange}
			handleAutoFill={handleLocationResults}
		/>
	);
};

LocationInput.propTypes = {};

const mapStateToProps = (state) => ({
	results: state.location.results,
	loading: state.location.loading,
});

export default connect(mapStateToProps, { clearLocationResults, getLocations })(
	LocationInput
);
