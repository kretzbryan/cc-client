import React, { Fragment } from 'react';

const UserCardMobile = () => {
    return (
        <Fragment>
        <section className="card user-card-mobile">
        <section className="user-card-mobile__image-container">
                <img className="user-card__image" src='/images/default.png' alt="profile image" />
        </section>
        <section className=" user-card-mobile__nav">
            <div className="user-card-mobile__nav-left">
                <ul>
                    <li><a href="/profile/"><p className="options">My Profile</p></a></li>
                    <li>
                        <a className="edit__modal__anchor anchor" href="#" data-toggle="modal" data-target="#profilePhotoModal"><p className ='options'>Edit Photo</p></a>
                    </li>
                    <li>
                        <a className="edit__modal__anchor anchor" href="#" data-toggle="modal" data-target="#editModal"><p className ='options'>Edit Profile</p></a>
                    </li>
                </ul>
            </div>
            <div className="user-card-mobile__nav-right">
                <ul>
                    <li><a href="/gigs"><p className="options">Gigs</p></a></li>
                    <li>
                        <a href='/browse-profiles'><p className ='options'>People</p></a>
                    </li>
                    <li>
                        <a className="edit__modal__anchor anchor" href="#" data-toggle="modal" data-target="#addGigModal"><p className ='options'>Add Gig</p></a>
                    </li>
                </ul>
            </div>
        </section>
        
    
</section>
        </Fragment>
    )
}

export default UserCardMobile;
