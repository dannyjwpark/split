import React from 'react';
import { connect } from 'react-redux';

// actions import
import { addFriend, deleteFriend, fetchFriends, fetchFriend } from '../../actions/friend_actions'
import { addBill, deleteBill, fetchBill, fetchBills, updateBill } from '../../actions/bill_actions'
import Homepage from './homepage';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions'


const mapStateToProps = ({ session, entities: { users, friends, usersList, bills } }) => {
    // destructuring; grabbing values of session and entiries from the state; state.session etc 
    return {
        currentUser: users[session.id],
        friends: Object.values(friends),
        usersIndex: Object.values(usersIndex),
        usersIndexObj: usersIndex,
        bills: Object.values(bills)
    };
};

const mapDispatchToProps = dispatch => ({

    logout: () => dispatch(logout()),

    fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
    fetchFriend: (friend) => dispatch(fetchFriend(friend)),
    addFriend: (friend) => dispatch(addFriend(friend)),
    deleteFriend: (friend) => dispatch(deleteFriend(friend)),

    fetchUsers: () => dispatch(fetchUsers()),

    fetchBills: () => dispatch(fetchExpenses()),
    fetchBill: (bill) => dispatch(fetchExpense(bill)),
    addBill: (bill) => dispatch(addExpense(bill)),
    deleteBill: (billId) => dispatch(deleteExpense(billId)),
    updateBill: (bill) => dispatch(deleteExpense(bill)),

    addExpenseForm: (
        <button className='db-add-expense-btn' onClick={() => dispatch(openModal('addexpense'))}>
            Add a bill
        </button>
    ),
    closeModal: () => dispatch(closeModal()),



});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
