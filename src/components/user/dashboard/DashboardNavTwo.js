import React from 'react'

const DashboardNavTwo = () => {
    return (
        <div className="card dashboard-nav--2">
            <div className="col-1-of-2 dashboard-nav--2__section">
                <ul className="dashboard-nav--social">
                    <li className="dashboard-nav--social__item">Connections</li>
                    <li className="dashboard-nav--social__item">Messages</li>
                    <li className="dashboard-nav--social__item">Bookmarks</li>
                </ul>
            </div>
            <div className="col-1-of-2 dashboard-nav--2__section">
                <ul className="dashboard-nav--social">
                    <li className="dashboard-nav--social__item">Saved Gigs</li>
                    <li className="dashboard-nav--social__item">Events</li>
                    <li className="dashboard-nav--social__item">Notifications</li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardNavTwo;
