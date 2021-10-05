import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

import AllBills from './all_bills'

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
        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),
        addFriend: (friend) => dispatch(addFriend(friend)),
        deleteFriend: (friend) => dispatch(deleteFriend(friend)),

        fetchUsers: () => dispatch(fetchUsers()),

        fetchBills: () => dispatch(fetchBills()),
        fetchBill: (bill) => dispatch(fetchBill(bill)),
        addBill: (bill) => dispatch(addBill(bill)),
        deleteBill: (billId) => dispatch(deleteBill(billId)),
        updateBill: (bill) => dispatch(deleteBill(bill)),

        logout: () => dispatch(logout()),

        addBillForm: (
            <button className='add-bill-button' onClick={() => dispatch(openModal('addBill'))}>
                Add an expense
            </button>
        ),

        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),


    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBills);