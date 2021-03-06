import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

import AddBillForm from './add_bill_form';
import { addBill } from '../../actions/bill_actions';

const mapStateToProps = ({ session, entities: { bills, friends, users } }) => {
    return {
        formType: 'addBill',

        bills: Object.values(bills),
        currentUser: users[session.id],
        friends: Object.values(friends),
        users: Object.values(users),
        usersObj: users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (bill) => dispatch(addBill(bill)),
        addBillForm: (
            <button className='add-bill-button' onClick={() => dispatch(openModal('addBill'))}>
                Add an expense
            </button>
        ),

        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),

        addBill: (bill) => dispatch(addBill(bill)),

        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),

        fetchUsers: () => dispatch(fetchUsers()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBillForm);
