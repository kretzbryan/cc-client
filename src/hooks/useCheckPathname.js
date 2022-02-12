export default function useCheckPathname(pathname) {
	const checkPathname = (string) => (pathname.includes(string) ? true : false);
	const home = checkPathname('/home');
	const profileDetail = checkPathname('/profile/');
	const connections = checkPathname('/dashboard/connections');
	const events = checkPathname('/dashboard/events');
	const notifications = checkPathname('/dashboard/notifications');
	const following = checkPathname('/dashboard/following');
	const discover = checkPathname('/dashboard/discover');
	const editProfile = checkPathname('/dashboard/edit-profile');
	const browseProfile = checkPathname('/browse-profile');
	const gigBrowse = checkPathname('/gigs');
	const gigDetail = checkPathname('/gig/');

	return {
		home,
		profileDetail,
		connections,
		events,
		notifications,
		following,
		discover,
		editProfile,
		browseProfile,
		gigBrowse,
		gigDetail,
	};
}
