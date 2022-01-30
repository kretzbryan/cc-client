import React, { useState, useEffect } from 'react';
import BrowseProfileCard from './BrowseProfileCard';
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';


const ProfileCardContainer = ({ profile: { profiles, loading } }) => {

    const generateProfileCards = (profiles) => {
        return profiles.map((profile) => {
             return <BrowseProfileCard key={profile._id} firstName= {profile.firstName} lastName={profile.lastName} location={profile.location || 'Unknown Location'} occupation={profile.occupation || 'Unknown'} />
        })
    }

    
    return (
    <div className="row profile-card__container">
        {!loading && generateProfileCards(profiles)}
    </div>
)}

ProfileCardContainer.propTypes = {
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps)(ProfileCardContainer);

