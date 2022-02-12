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
		<div>
			{path ? (
				<Link to={path}>
					<button type='button' className={`btn ${classNames}`}>
						{icon}
						{buttonText}
						{!!itemAmount && <span className='item-amount'>{itemAmount}</span>}
					</button>
				</Link>
			) : (
				<button
					onClick={setWindow}
					type='button'
					className={`btn ${classNames}`}>
					{icon}
					{buttonText}
				</button>
			)}
		</div>
	);
};

export default Button;
