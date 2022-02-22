import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
	classNames,
	buttonText,
	icon,
	path,
	itemReference,
	itemAmount,
	setWindow,
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
					onClick={setWindow}
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

export default Button;
