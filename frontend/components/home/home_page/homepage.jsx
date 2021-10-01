import React from 'react';

import { Link } from 'react-router-dom'
import Modal from '../../modal/modal';

// components that will be included in the page
import HomepageCentercolumn from './homepage_centercolumn'
import HomepageLeftsidebar from './homepage_leftsidebar';
import HomepageNavbar from './homepage_navbar';
import HomepageRightsidebar from './homepage_rightsidebar';

class Homepage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='homepage-wrapper'>
                <div className='homepage-main'>
                    <div className='homepage-navbar'>
                        <HomepageNavbar />
                    </div>
                    <div className='homepage-leftsidebar'>
                        {/* <HomepageLeftsidebar /> */}
                    </div>
                    <div className='homepage-centercolumn'>
                        {/* <HomepageCentercolumn /> */}
                    </div>
                    <div className='homepage-rightsidebar'>
                        {/* <HomepageRightsidebar /> */}
                    </div>
                </div>
                <footer className='homepage-footer'>

                </footer>
            </div>
        )
    }
}

export default Homepage;