import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import { Route } from 'react-router-dom';

const WithUserDash = ({
	exact,
	path,
	component: Component,
	render: Render,
	...rest
}) => {
	return (
		<Route
			exact={exact}
			path={path}
			{...rest}
			render={(routeProps) => {
				return (
					<div className='row main__container'>
						<section className='column-secondary'>
							<UserCard {...routeProps} />
							<DashboardNav {...routeProps} />
						</section>
						<section className='column-primary'>
							{Component ? (
								<Component {...routeProps} />
							) : (
								<Render {...routeProps} />
							)}{' '}
						</section>
					</div>
				);
			}}
		/>
	);
};

WithUserDash.propTypes = {};

export default WithUserDash;
