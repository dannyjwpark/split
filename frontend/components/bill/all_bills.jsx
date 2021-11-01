import React from 'react';

import { Link } from 'react-router-dom';
import AddBillForm from './add_bill_form';

// components that will be included in the page
import HomepageLeftsidebar from '../home/home_page/homepage_leftsidebar';
import HomepageNavbar from '../home/home_page/homepage_navbar';
import BillsIndex from './bills_index';

class AllBills extends React.Component {
  constructor(props) {
      super(props);

      this.settleBills = this.settleBills.bind(this);
  }
  
  settleBills (){
    this.props.bills.forEach((bill) => {
      this.props.deleteBill(bill)
    })
  }

  componentDidMount() {
    this.props.fetchBills();
  }

  render() {
      return (
        <div className='homepage-wrapper'>
          <div className='homepage-navbar'>
              <HomepageNavbar 
                  logout={this.props.logout} 
                  currentUser={this.props.currentUser} 
              />
          </div>

          <div className='homepage-main'>
            <div className='homepage-leftsidebar'>
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
            </div>

            <div className='homepage-centercolumn'>
              <div>
                  <nav className='center-nav'>
                    <nav className='center-nav-left'>
                      <p>All expenses</p>
                    </nav>

                    <nav className='center-nav-right'>
                      {/* <button
                        className='add-bill-button'
                        currentuser={this.props.currentUser}
                        onClick={() => dispatch(this.props.openModal('addBill'))}
                      >
                        <p className='bill-form-text'>Add an expense</p>
                      </button> */}

                      {/* <button
                        className='settle-up-button'
                        currentuser={this.props.currentUser}
                        onClick={this.settleBills}
                      >
                        <p className='bill-form-text'>Settle bills</p>
                      </button> */}
                    </nav>
                  </nav>
                </div>

                <div className='homepage-centercolumn-bills-index'>
                  <BillsIndex
                  fetchBills={this.props.fetchBills}
                  fetchBill={this.props.fetchBill}
                  addBill={this.props.addBill}
                  updateBill={this.props.updateBill}
                  deleteBill={this.props.deleteBill}

                  fetchFriend={this.props.fetchFriend}
                  fetchFriends={this.props.fetchFriends}

                  fetchUser={this.props.fetchUser}
                  fetchUsers={this.props.fetchUsers}

                  fetchComments={this.props.fetchComments}
                  fetchComment={this.props.fetchComment}
                  addComment={this.props.addComment}
                  deleteComment={this.props.deleteComment}
                  updateComment={this.props.updateComment}

                  currentUser={this.props.currentUser}
                  friends={this.props.friends}
                  // num_payers={this.props.num_payers}
                  bills={this.props.bills}
                  users={this.props.users}
                  usersObj={this.props.usersObj}
                  />
                </div>

              </div>

            <div className='homepage-rightsidebar'>
              {/* <br />
              <p className='homepage-rightsidebar-balance'>
                Your Balance
              </p>
              <br />
              <p className='homepage-rightsidebar-amount'>
                ____ owes you $__
              </p>
              <br /> */}
            </div>

          </div>

        </div>
    )
  }
}

export default AllBills;