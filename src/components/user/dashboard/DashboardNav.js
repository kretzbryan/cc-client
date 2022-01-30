import React, { Fragment, useEffect, useState } from 'react';
import Button from '../../layout/Button';
import { dashboardButtonData } from './dashboardButtonData';

const DashboardNav = () => {
	const [buttons, setButtons] = useState([]);
	useEffect(() => {
		setButtons([...dashboardButtonData]);
	}, []);
	return (
		<Fragment>
			<h4 className='dashboard-title'>
				<i className='fas dashboard-icon fa-bars'></i>Dashboard
			</h4>
			<hr className='dashboard-line' />
			{buttons.length
				? buttons.map((button, index) => {
						console.log(button);
						const { path, classNames, icon, buttonText } = button;

						return index === 6 ? (
							<Fragment>
								<Button
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

export default DashboardNav;
