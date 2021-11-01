import React from 'react';
import HomepageNavbar from '../home/home_page/homepage_navbar';
import HomepageLeftsidebar from '../home/home_page/homepage_leftsidebar';
import FriendExpensesIndex from './friend_expenses_index';

export default class FriendShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  deleteFriend() {
  // debugger;
    const user_id = this.props.currentUser.id
    const friend_id = this.props.friend.id
    const friend = { user_id: user_id, friend_id: friend_id }
    console.log(friend);
    this.props.deleteFriend(friend);
    this.props.fetchFriends(user_id).then(() => this.props.history.push("/home"))
  }

  render() {
    console.log('this.props @ friend show page');
    console.log(this.props);
    // console.log('this.props.currentUser.id');
    // console.log(this.props.currentUser.id);
      return (
        <div className='homepage-wrapper'>
          <header className='homepage-navbar'>
            <HomepageNavbar logout={this.props.logout} currentUser={this.props.currentUser} />
          </header>

          <section className='homepage-main'>

            <aside className='homepage-leftsidebar'>
                <HomepageLeftsidebar
                  fetchFriends={this.props.fetchFriends}
                  fetchFriend={this.props.fetchFriend}
                  addFriend={this.props.addFriend}
                  deleteFriend={this.props.deleteFriend}
                  fetchUsers={this.props.fetchUsers}
                  currentUser={this.props.currentUser}
                  friends={this.props.friends}
                  users={this.props.users}
                />
            </aside>

            <section className='homepage-centercolumn'>
                <div className='db-center-header'>
                  <img className='user-icon2' src={window.doge} alt="" />
                  <span className='friend-name-text'>{this.props.friend.name}</span>
                  {this.props.addBillForm}
                </div>
                
                <div className='db-expenses-index'>
                  <FriendExpensesIndex
                    fetchBills={this.props.fetchBills}
                    fetchBill={this.props.fetchBill}
                    addBill={this.props.addBill}
                    updateBill={this.props.updateBill}
                    deleteBill={this.props.deleteBill}

                    currentUser={this.props.currentUser}

                    friend={this.props.friend}
                    friends={Object.values(this.props.friends)}
                    bills={this.props.bills}
                    users={this.props.users}
                    usersObj={this.props.usersObj}
                  />
                </div>
            </section>

            <section className='homepage-rightsidebar'>
              <button className='remove-friend-btn' onClick={this.deleteFriend}>
                <p className='remove-friend-text'>Remove this friend</p>
              </button>
            </section>
          </section>

        </div>
      )
  }

}