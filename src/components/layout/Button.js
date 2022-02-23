import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';

const Button = ({
	classNames,
	buttonText,
	icon,
	path,
	itemReference,
	itemAmount,
	setWindow,
	buttonAction,
	logout,
}) => {
	return (
		<div className='dashboard-button__container'>
			{path ? (
				<Link to={path}>
					<button type='button' className={`btn ${classNames}`}>
						{icon}
						<span className='button-text'>{buttonText}</span>
						{!!itemAmount && <span className='item-amount'>{itemAmount}</span>}
					</button>
				</Link>
			) : (
				<button
					onClick={itemReference === 'log-out' ? logout : setWindow}
					type='button'
					className={`btn ${classNames}`}>
					{icon}
					<span className='button-text'>{buttonText}</span>
					{!!itemAmount && <span className='item-amount'>{itemAmount}</span>}
				</button>
			)}
		</div>
	);
};

export default connect(null, { logout })(Button);
