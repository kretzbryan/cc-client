import React, { useEffect } from 'react';
import ProfileCardContainer from './ProfileCardContainer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProfiles } from '../../actions/profile'



const ProfileColumn = ({getAllProfiles, profile: { profiles } }) => {
    useEffect(() => {
        getAllProfiles()
    }, [getAllProfiles])
    
    return (
    <div className="profile__column">
            <ProfileCardContainer />
        </div>
)}

ProfileColumn.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getAllProfiles })(ProfileColumn);