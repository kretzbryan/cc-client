import React from 'react';

const ProfileCardText = ({ text, cName }) => (
	<h6 className={`profile-card__text${cName ? ` ${cName}` : ''}`}>{text}</h6>
);

export default ProfileCardText;
