import { connect } from 'react-redux';
import React from 'react';
import FriendShow from './friend_show';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { bills, friends, users } }, ownProps) => {
    return {
        bills: Object.values(bills),
        currentUser: users[session.id],
        friend: friends[ownProps.match.params.friendId],
        friends: Object.values(friends),
        users: Object.values(users),
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addFriend: (friend) => dispatch(addFriend(friend)),
        deleteFriend: (friend) => dispatch(deleteFriend(friend)),
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),
        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
        fetchUsers: () => dispatch(fetchUsers()),

        addBill: (bill) => dispatch(addBill(bill)),
        deleteBill: (billId) => dispatch(deleteBill(billId)),
        fetchBills: () => dispatch(fetchBills()),
        fetchBill: (bill) => dispatch(fetchBill(bill)),
        updateBill: (bill) => dispatch(updateBill(bill)),
        
        fetchUser: (user_id) => dispatch(fetchUser(user_id)),
        fetchUsers: () => dispatch(fetchUsers()),
        logout: () => dispatch(logout()),
        

        openModal: modal => dispatch(openModal(modal)),
        closeModal: modal => dispatch(closeModal(modal)),

        addBillForm: (
            <button className='add-bill-button2' onClick={() => dispatch(openModal('addBill'))}>
                <p className='bill-form-text2'>Add an expense</p>
            </button>
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);