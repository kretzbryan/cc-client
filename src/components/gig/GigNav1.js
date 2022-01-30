import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecentGigs } from '../../actions/gig';
import GigNavItem from './GigNavItem';
import Spinner from '../layout/Spinner';

const GigNav1 = ({ getRecentGigs, gigs, loading }) => {
    useEffect(() => {
        getRecentGigs(5)
    },  [])

    return (
        <Fragment>
            <section className="row card gig__container">
            <header className='gig__header'>Recent Gigs</header>
                <ul className='gig__list' >
                    {!loading && gigs.map(gig => {
                        return <GigNavItem key={gig._id} gig={gig} />
                    })}
                </ul>
                <footer className='gig__footer' >
                    <a className='gig__link-all' href="/gig"> See More </a>
                </footer>
            </section>
        </Fragment>
    )
}

GigNav1.propTypes = {
    getRecentGigs: PropTypes.func.isRequired,
    gigs: PropTypes.array.isRequired,
    loading: PropTypes.bool,
}

const mapStateToProps = state => ({
    loading: state.gig.loading,
    gigs: state.gig.gigs
})

export default connect(mapStateToProps, { getRecentGigs })(GigNav1);

