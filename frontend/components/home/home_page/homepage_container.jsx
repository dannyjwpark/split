import React from 'react';
import { connect } from 'react-redux';

// actions import
import { addBill, deleteBill, fetchBill, fetchBills, updateBill } from '../../../actions/bill_actions'
import { addFriend, deleteFriend, fetchFriends, fetchFriend } from '../../../actions/friend_actions'
import Homepage from './homepage';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../../actions/user_actions'


const mapStateToProps = ({ session, entities: { bills, friends, users } }) => {
// const mapStateToProps = (state) => {
    return {
        bills: Object.values(bills),
        currentUser: users[session.id],
        friends: Object.values(friends),
        users: Object.values(users),
        usersObj: users

    };
};

const mapDispatchToProps = dispatch => {
    return{
        addFriend: (friend) => dispatch(addFriend(friend)),
        deleteFriend: (friend) => dispatch(deleteFriend(friend)),
        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),

        addBill: (bill) => dispatch(addBill(bill)),
        deleteBill: (billId) => dispatch(deleteBill(billId)),
        fetchBill: (billId) => dispatch(fetchBill(billId)),
        fetchBills: () => dispatch(fetchBills()),
        updateBill: (bill) => dispatch(updateBill(bill)),

        fetchUser: (user_id) => dispatch(fetchUser(user_id)),
        fetchUsers: () => dispatch(fetchUsers()),
        logout: () => dispatch(logout()),

        openModal: modal => dispatch(openModal(modal)),
        closeModal: modal => dispatch(closeModal(modal)),

        addBillForm: (
            <button className='add-bill-button' onClick={() => dispatch(openModal('addBill'))}>
                Add an expense
            </button>
        ),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);