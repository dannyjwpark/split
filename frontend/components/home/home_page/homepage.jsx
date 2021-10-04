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
            <div className='homepage-wrapper' >
                    <div className='homepage-navbar'>
                        <HomepageNavbar currentuser={this.props.currentuser}/>
                    </div>
                <div className='homepage-main'>
                    <div className='homepage-leftsidebar'>
                        <HomepageLeftsidebar 
                            // fetchUsers={this.props.fetchUsers}
                            currentUser={this.props.currentuser}
                            // addFriend={this.props.addFriend}
                            // usersIndex={this.props.usersIndex}
                            // fetchFriends={this.props.fetchFriends}
                            // friends={this.props.friends}
                        />
                    </div>
                    <div className='homepage-centercolumn'>
                        <HomepageCentercolumn currentuser={this.props.currentuser}/>
                    </div>
                    <div className='homepage-rightsidebar'>
                        <HomepageRightsidebar currentuser={this.props.currentuser}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;