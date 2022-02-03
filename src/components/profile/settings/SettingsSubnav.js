// import group from '../../images/noun-group-4040013-F5FAFF.svg';
// import event from '../../images/noun-event-1359560-F5FAFF.svg';
// import gig from '../../images/noun-coin-1010851-F5FAFF.svg';

const SettingsSubnav = (props) => {
	return (
		<div className='subnav'>
			<ul>
				<li>
					<button>Profile</button>
				</li>
				{/* <li>
					<button>
						<img src={event} alt='event icon' /> <br /> Events
					</button>
				</li>
				<li>
					<button>
						<img src={gig} alt='gig icon' /> <br /> Gigs
					</button>
				</li>
				<li>
					<button>
						<img src={group} alt='group icon' /> <br /> Groups
					</button>
				</li> */}
			</ul>
		</div>
	);
};

SettingsSubnav.propTypes = {};

export default SettingsSubnav;
