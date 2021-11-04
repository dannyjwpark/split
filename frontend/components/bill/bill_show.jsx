import React from 'react';
import HomepageNavbar from '../home/home_page/homepage_navbar';
import HomepageLeftsidebar from '../home/home_page/homepage_leftsidebar';
import BillIndexItem from './bill_index_item';
import CommentList from '../comment/comment_list'
import AddCommentForm from '../comment/add_comment_form';
import { Alert } from 'react-alert'


export default class BillShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      comment: 'Add a comment',
      comments: [],
    }
    this.deleteBill = this.deleteBill.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount(){
    this.props.fetchComments(this.props.bill.id);
    this.refresh();


    let comment_list = [];
    Object.keys(this.props.comments).map((k,v) => comment_list.push(this.props.comments[k]));
    this.setState({comments: comment_list});
    // this.setState({comments: this.props.comments});
  }

  refresh() {
    this.props.fetchComments(this.props.bill.id);

    let comment_list = [];
    Object.keys(this.props.comments).map((k,v) => comment_list.push(this.props.comments[k]));
    this.setState({comments: comment_list});
    
  }


  deleteBill() {
  // debugger;
    // const billId = this.props.bill.id
    // console.log(billId);
    if(this.props.bill.authorId === this.props.currentUser.id || this.props.bill.payerId === this.props.currentUser.id){
      this.props.deleteBill(this.props.bill.id);
      this.props.fetchBills().then(() => this.props.history.push("/home"))
    } else {
      alert("Only the author or payer of the bill can delete this bill.")
    }
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  handleDelete(id){
    const bill_id = this.props.bill.id;
    const comment = {bill_id: bill_id, id: id}
    // debugger

    if(this.props.comments[id].commenterId === this.props.currentUser.id){
      let new_comments = this.state.comments.filter((comment) => comment.id !== id);
      this.props.deleteComment(comment);
      this.setState(state => {
        const comments = state.comments.filter((comment) => comment.id !== id);
        
        return {
          comments,
        }
      })
    } else {
      alert("You can only delete your own comment")
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const comment = { 
      bill_id: this.props.bill.id,
      commenter_id: this.props.currentUser.id,
      comment: this.state.comment,
    };

    // debugger;
    this.props.addComment(comment)
      .then(() => this.props.fetchComments(this.props.bill.id))
      .then(() => this.setState(state => {
        let comments = state.comments;
        comments[comments.length] = {
          commenterId: this.props.currentUser.id,
          billId: this.props.bill.id,
          comment: this.state.comment,
          createdAt: 'Now',
          updatedAt: 'Now',

        }
        return {
          comment: this.state.comment,
          comments,
          }
        }
      )
    );
    this.forceUpdate();
    console.log(this.state.comments);
  }

  update() {
    return e => {
      this.setState({ comment: e.target.value })
    }
    // return e => this.setState({
    //   [field]: e.currentTarget.value
    // });
  }

  render() {
    // console.log("this.props @ bill.show");
    // console.log(this.props);
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
                  bills={this.props.bills}

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
                {/* <CommentList 
                  // fetchBills={this.props.fetchBills}
                  fetchBill={this.props.fetchBill}
                  // addBill={this.props.addBill}
                  // updateBill={this.props.updateBill}
                  // deleteBill={this.props.deleteBill}

                  fetchFriend={this.props.fetchFriend}
                  fetchFriends={this.props.fetchFriends}

                  // fetchUser={this.props.fetchUser}
                  // fetchUsers={this.props.fetchUsers}

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
                  comments={this.props.comments}
                  users={this.props.users} usersObj={this.props.usersObj}
                /> */}
                <div className='comment-container'>
                  <p className='comment-title'>Comments: </p>
                  <ul className="comment-list">
                    {this.state.comments.map((comment, idx) => 
                      <li className="comment-item" key={comment.id}>
                        <div className="comment-item-user">
                          {this.props.users[comment.commenterId -1].username} &nbsp; <div className='time-small-font'>
                            <p className='comment-name-time' key={comment.createdAt}>
                              {comment.createdAt.slice(0,10)} &nbsp;
                              {comment.createdAt.slice(11,16)}
                            </p>
                          </div>
                            <button className='comment-delete' onClick={() => this.handleDelete(comment.id)}>
                              <p className='comment-delete-button'> x </p>
                            </button>
                        </div>
                        <div className="comment-item-comment" key={comment.comment}>
                          {comment.comment}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
                {/* <AddCommentForm 
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
                  bills={this.props.bills}
                  comments={this.props.comments}
                  users={this.props.users}

                  bill = {this.props.bill}
                  onClick= {this.forceUpdateHandler}
                /> */}
                <form onSubmit={this.handleSubmit} className='add-comment-form'>
                  <input className='comment-index-box' 
                    onChange={this.update()} 
                    // value={this.state.bill} 
                    value={this.state.comment} 
                  />
                  <br />
                  <div className='submit-button-add-comment'>
                    <input className="add-comment-submit" type="submit" value='Post' />
                  </div>
                </form>

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