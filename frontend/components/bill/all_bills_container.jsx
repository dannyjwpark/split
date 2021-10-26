import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

import AllBills from './all_bills'
import { addBill, deleteBill, fetchBill, fetchBills, updateBill } from '../../actions/bill_actions'
import { addFriend, deleteFriend, fetchFriends, fetchFriend } from '../../actions/friend_actions'
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchComments, fetchComment, addComment, updateComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = ({ session, entities: { bills, friends, users } }) => {
    return ({
        bills: Object.values(bills),
        currentUser: users[session.id],
        friends: Object.values(friends),
        users: Object.values(users),
        usersObj: users,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        addFriend: (friend) => dispatch(addFriend(friend)),
        deleteFriend: (friend) => dispatch(deleteFriend(friend)),
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),
        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
        
        addBill: (bill) => dispatch(addBill(bill)),
        deleteBill: (billId) => dispatch(deleteBill(billId)),
        fetchBill: (billId) => dispatch(fetchBill(billId)),
        fetchBills: () => dispatch(fetchBills()),
        updateBill: (bill) => dispatch(deleteBill(bill)),
        
        fetchUser: (user_id) => dispatch(fetchUser(user_id)),
        fetchUsers: () => dispatch(fetchUsers()),
        logout: () => dispatch(logout()),

        fetchComments: (bill_id) => dispatch(fetchComments(bill_id)),
        fetchComment: (comment) => dispatch(fetchComment(comment)),
        addComment: (comment) => dispatch(addComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),

        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),
        
        addBillForm: (
            <button className='add-bill-button' onClick={() => dispatch(openModal('addBill'))}>
                Add an expense
            </button>
        ),



    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBills);