import React from 'react';

import { Link } from 'react-router-dom';
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

  componentDidMount() {
    this.props.fetchUsers();
    // console.log(`props at homepage: `);
    // console.log(this.props);
  }


  render() {
      return (
        <div className='homepage-wrapper' >
          <div className='homepage-navbar'>
            <HomepageNavbar 
              currentUser={this.props.currentUser}
              logout={this.props.logout}
            />
          </div>
          <div className='homepage-main'>
            <div className='homepage-leftsidebar'>
                <HomepageLeftsidebar 
                  addFriend={this.props.addFriend}
                  currentUser={this.props.currentUser}
                  deleteFriend={this.props.deleteFriend}
                  friends={this.props.friends}
                  fetchFriends={this.props.fetchFriends}
                  fetchUsers={this.props.fetchUsers}
                  users={this.props.users}
                  usersObj={this.props.usersObj}
                />
            </div>
          <div className='homepage-centercolumn'>
            <HomepageCentercolumn 
              addBillForm={this.props.addBillForm}
              currentUser={this.props.currentUser}
              friends={this.props.friends}
              fetchFriends={this.props.fetchFriends}
              openModal={this.props.openModal}
            />
          </div>
          <div className='homepage-rightsidebar'>
            <HomepageRightsidebar currentUser={this.props.currentUser}/>
          </div>
        </div>
    </div>
    )
  }
}

export default Homepage;