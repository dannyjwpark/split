import React from 'react';
import HomepageNavbar from '../home/home_page/homepage_navbar';
import HomepageLeftsidebar from '../home/home_page/homepage_leftsidebar';
import BillIndexItem from './bill_index_item';
import Comment from '../comment/comment';
import AddCommentForm from '../comment/add_comment_form';

export default class BillShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBill = this.deleteBill.bind(this);
  }

  deleteBill() {
  // debugger;
    const billId = this.props.bill.id
    console.log(billId);
    this.props.deleteBill(billId);
    this.props.fetchBills().then(() => this.props.history.push("/home"))
  }

  render() {
    console.log(this.props);
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
                <span className='bill-title-text'>Expense {this.props.bill.id}</span>
                {this.props.addBillForm}
              </div>
              
              <div className='bill-index-container'>
                <BillIndexItem
                  key={this.props.bill.id}
                  bill={this.props.bill}

                  addBill={this.props.addBill}
                  deleteBill={this.props.deleteBill}
                  fetchBill={this.props.fetchBill}
                  updateBill={this.props.updateBill}

                  fetchComments={this.props.fetchComments}
                  fetchComment={this.props.fetchComment}
                  addComment={this.props.addComment}
                  updateComment={this.props.updateComment}
                  deleteComment={this.props.deleteComment}

                  currentUser={this.props.currentUser}
                  friends={this.props.friends}
                  users={this.props.users}
                  usersObj={this.props.usersObj}
                />
              </div>

              <div className='comment-container'>
                {/* <Comment 
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
                  bill={this.props.bill}
                  bills={this.props.bills}
                  users={this.props.users}
                  usersObj={this.props.usersObj}
                /> */}
                <AddCommentForm 
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

                  bill = {this.props.bill}
                  // usersObj={this.props.usersObj}
                />
              </div>
          </section>

          <section className='homepage-rightsidebar'>
            <button className='remove-bill-btn' onClick={this.deleteBill}>
              <p className='remove-bill-text'>Remove this bill</p>
            </button>
          </section>
        </section>

      </div>
    )
  }

}