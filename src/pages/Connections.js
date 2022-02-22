import requireAuth from '../components/hoc/AuthComponent';
import redirectHOC from '../components/hoc/RedirectHOC';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToolBar from '../components/event/ToolBar';
import Current from '../components/connections/Current';
import Requests from '../components/connections/Requests';
import { connect } from 'react-redux';

const Connections = ({ user }) => {
	const [window, setWindow] = useState('connections');

	const { connections } = user;

	const { requests, confirmed } = connections;

	const handleWindow = () => {
		if (window === 'connections') {
			return <Current current={confirmed} />;
		}
		if (window === 'requests') {
			return <Requests requests={requests.incoming} />;
		}
	};

	return (
		<div className='dashboard-main connections'>
			<div className='subnav'>
				<ul>
					<li>
						<button onClick={() => setWindow('requests')}>Requests</button>
					</li>
					<li>
						<button onClick={() => setWindow('connections')}>
							Connections
						</button>
					</li>
					{/* <li>
					<button>
						<img src={group} alt='group icon' /> <br /> Groups
					</button>
				</li> */}
				</ul>
				{/* <ToolBar type='friends' /> */}
			</div>
			{handleWindow()}
		</div>
	);
};

Connections.propTypes = {};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(
	mapStateToProps,
	null
)(redirectHOC(requireAuth(Connections)));
