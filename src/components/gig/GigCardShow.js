import React, { Fragment } from 'react'

const GigCardShow = ({gig: {title, location, name, text, user}}) => {
    return (
        <Fragment>
        <section className="card gig-card-show">
        <header className='row gig-card-show__header'>
            <div className="gig-card-show__image-container">
                    <img className="gig-card-show__image" src="/images/default.png" alt="profile image"/>
            </div>
            
            <div className=" gig-card-show__header-details">
                <div className="detail-container">
                    <p className='gig-card-show__title' >
                        {title}
                    </p>
                    <p>
                       location: {location}
                    </p>
                    <p>
                        posted by: <a className='options' href={`/profile/${user}`}>{name}</a>
                    </p>
                </div>
                
            </div>
        </header>
        <section className="row gig-card-show__main">
        <p> {text}</p>
        </section>
    </section>
        </Fragment>
    )
}

export default GigCardShow;
