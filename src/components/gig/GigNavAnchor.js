import React, { Fragment } from 'react';
import ReactTimeAgo from 'react-time-ago';

const GigNavAnchor = ({id, title, createdAt}) => {
    return (
        <Fragment>
            <a href={`/gig/${id}`} className='gig__anchor'>
                <li className='gig__list-item' >
                    <div className="gig__thumb-container">
                        <img src='/images/default.png' alt="profile thumbnail" className="gig__thumb" />
                    </div>
                    <div className="gig__text">
                        <p className="gig__title"> {title}</p> 
                        <span className='gig__subtext'>
                            <ReactTimeAgo date={createdAt} />
                        </span>
                    </div>
                </li>
            </a>
        </Fragment>
    )
}

export default GigNavAnchor
