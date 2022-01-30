import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ classNames, buttonText, icon, path }) => {
	return (
		<div>
			{path ? (
				<Link to={path}>
					<button type='button' className={`btn ${classNames}`}>
						{icon}
						{buttonText}
					</button>
				</Link>
			) : (
				<button type='button' className={`btn ${classNames}`}>
					{icon}
					{buttonText}
				</button>
			)}
		</div>
	);
};

export default Button;
