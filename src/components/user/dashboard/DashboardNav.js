import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../layout/Button';
import { dashboardButtonData } from './dashboardButtonData';

const DashboardNav = ({ user, setCurrentWindow }) => {
	const [buttons, setButtons] = useState([]);
	useEffect(() => {
		setButtons([...dashboardButtonData]);
	}, []);
	const returnItemReferenceAmount = (itemReference) => {
		if (itemReference === 'message') {
			console.log('messageLength', user && user.message.messages.length);
			return user && user.message.messages.length;
		}
		if (itemReference === 'notification') {
			console.log('notificationLength', user && user.notifications.new.length);
			return user && user.notifications.new.length;
		}
		if (itemReference === 'connection') {
			console.log(
				'notificationLength',
				user && user.connections.requests.incoming.length
			);
			return user && user.connections.requests.incoming.length;
		}
	};

	return (
		<Fragment>
			<h4 className='dashboard-title'>
				<i className='fas dashboard-icon fa-bars'></i>Dashboard
			</h4>
			<hr className='dashboard-line' />
			{buttons.length
				? buttons.map((button, index) => {
						const {
							path,
							classNames,
							icon,
							buttonText,
							itemReference,
							window,
						} = button;

						return index === 4 ? (
							<Fragment>
								<Button
									itemAmount={
										itemReference && returnItemReferenceAmount(itemReference)
									}
									setWindow={() => setCurrentWindow(window)}
									path={path}
									classNames={classNames}
									icon={<i className={icon}></i>}
									buttonText={buttonText}
								/>
								<h4 className='dashboard-title'>
									<i className='fas dashboard-icon fa-id-card'></i>Profile
								</h4>
								<hr className='dashboard-line' />
							</Fragment>
						) : (
							<Button
								path={path}
								itemAmount={
									itemReference && returnItemReferenceAmount(itemReference)
								}
								setWindow={() => setCurrentWindow(window)}
								classNames={classNames}
								icon={<i className={icon}></i>}
								buttonText={buttonText}
							/>
						);
				  })
				: null}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(DashboardNav);
