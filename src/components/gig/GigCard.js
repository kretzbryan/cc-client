import React from 'react';
import ReactTimeAgo from 'react-time-ago'

const GigCard = ({ gig }) => {
    return (
        <div>
            
        <a href={`/gig/${gig._id}`} className="gig-card__anchor">
        <section className="row card gig-card gig-card-browse">
            <div className="gig-card__thumb-container">
                <img src="/images/default.png" alt="" className="gig-card__thumb"/>
            </div>
            <section className=" gig-card__info">
                    <div className="gig-card__info-left">
                        <p className="gig-card__text">{gig.title}</p>
                        <p className='gig-card__text'>location: {gig.location} </p>
                        <p>skills: N/A</p>
                        
                    </div>
                    <div className="gig-card__info-right">
                        <p className='gig-card__text'>posted by: {gig.name} </p>
                        <span className='timestamp' > 
                
                            posted: <ReactTimeAgo date={gig.createdAt} locale='en-US' />
                           
                        </span>
                    </div>
                </section>
        </section>
    </a>
        </div>
    )
}

export default GigCard
