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
        // console.log(`props before return: `);
        // console.log(this.props);
        // console.log(this.state);
        // const logout = this.props.logout;
        return (
            <div className='homepage-wrapper' >
                    <div className='homepage-navbar'>
                        <HomepageNavbar 
                            currentuser={this.props.currentuser}
                            logout={this.props.logout}
                        />
                    </div>
                <div className='homepage-main'>
                    <div className='homepage-leftsidebar'>
                        <HomepageLeftsidebar 
                            addFriend={this.props.addFriend}
                            currentUser={this.props.currentuser}
                            friends={this.props.friends}
                            fetchFriends={this.props.fetchFriends}
                            fetchUsers={this.props.fetchUsers}
                            users={this.props.users}
                        />
                    </div>
                    <div className='homepage-centercolumn'>
                        <HomepageCentercolumn 
                            currentuser={this.props.currentuser}
                            addBillForm={this.props.addBillForm}
                        />
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