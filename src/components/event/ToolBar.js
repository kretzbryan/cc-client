import React from 'react';
import PropTypes from 'prop-types';
import Input from '../layout/Input';

const ToolBar = ({ type }) => {
	const eventOrGigs = type === 'event' || type === 'gigs';
	const friends = type === 'friends';

	const eventGigInputs = () => {
		return (
			<>
				<Input
					cnames={null}
					label='startRange'
					labelText='From:'
					type='date'
					value={null}
					placeholder='mm/dd/yyyy'
				/>
				<Input
					cnames={null}
					label='endRange'
					labelText='To:'
					type='date'
					value={null}
					placeholder='mm/dd/yyyy'
				/>
			</>
		);
	};
	return (
		<div className='toolbar'>
			<Input
				cnames={null}
				label='startRange'
				labelText={<i className='fas dashboard-icon fa-search'></i>}
				type='text'
				value={null}
				placeholder='search here...'
			/>
			{eventOrGigs && eventGigInputs()}
		</div>
	);
};

ToolBar.propTypes = {};

export default ToolBar;
