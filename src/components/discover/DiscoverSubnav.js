import React from 'react';
import PropTypes from 'prop-types';
import people from '../../images/noun-people-4557488-F5FAFF.svg';
import group from '../../images/noun-group-4040013-F5FAFF.svg';
import event from '../../images/noun-event-1359560-F5FAFF.svg';
import gig from '../../images/noun-coin-1010851-F5FAFF.svg';
import ToolBar from '../event/ToolBar';

const DiscoverSubnav = (props) => {
	return (
		<div className='subnav'>
			<ul>
				<li>
					<button>
						<img src={people} alt='people icon' /> <br />
						People
					</button>
				</li>
				{/* <li>
					<button>
						<img src={event} alt='event icon' /> <br /> Events
					</button>
				</li> */}
				{/* <li>
					<button>
						<img src={gig} alt='gig icon' /> <br /> Gigs
					</button>
				</li> */}
				{/* <li>
					<button>
						<img src={group} alt='group icon' /> <br /> Groups
					</button>
				</li> */}
			</ul>
			{/* <ToolBar type='general' /> */}
		</div>
	);
};

DiscoverSubnav.propTypes = {};

export default DiscoverSubnav;
