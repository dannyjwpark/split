import { connect } from 'react-redux';
import React from 'react';
import BillShow from './bill_show';

const mapStateToProps = ({ session, entities: { bills, friends, users } }, ownProps) => {
  return {
    formType: 'addComment',

    bill: bills[ownProps.match.params.billId],
    bills: Object.values(bills),
    currentUser: users[session.id],
    friends: Object.values(friends),
    users: Object.values(users),
    usersObj: users,
  }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),
        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),

        deleteBill: (billId) => dispatch(deleteBill(billId)),
        fetchBills: () => dispatch(fetchBills()),
        fetchBill: (bill) => dispatch(fetchBill(bill)),
        updateBill: (bill) => dispatch(updateBill(bill)),

        fetchComments: (bill_id) => dispatch(fetchComments(bill_id)),
        fetchComment: (comment) => dispatch(fetchComment(comment)),
        addComment: (comment) => dispatch(addComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        
        fetchUser: (user_id) => dispatch(fetchUser(user_id)),
        fetchUsers: () => dispatch(fetchUsers()),
        logout: () => dispatch(logout()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillShow);