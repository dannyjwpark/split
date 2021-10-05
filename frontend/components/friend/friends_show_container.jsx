import { connect } from 'react-redux';
import React from 'react';
import FriendShow from './friend_show';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { bills, friends, users } }, ownProps) => {
    return {
        currentUser: users[session.id],
        friend: friends[ownProps.match.params.friendId],
        friends: Object.values(friends),
        users: Object.values(users),
        bills: Object.values(bills)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFriend: (friend) => dispatch(addFriend(friend)),
        deleteFriend: (friend) => dispatch(deleteFriend(friend)),
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),
        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
        fetchUsers: () => dispatch(fetchUsers()),

        fetchBills: () => dispatch(fetchBills()),
        fetchBill: (bill) => dispatch(fetchBill(bill)),
        addBill: (bill) => dispatch(addBill(bill)),
        deleteBill: (billId) => dispatch(deleteBill(billId)),
        updateBill: (bill) => dispatch(updateBill(bill)),
        
        logout: () => dispatch(logout()),
        
        addBillForm: (
            <button className='db-add-expense-btn' onClick={() => dispatch(openModal('addBill'))}>
                Add an expense
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);