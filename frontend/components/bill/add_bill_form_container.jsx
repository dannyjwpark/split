import React from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

import AddBillForm from './add_expense';
import { addBill } from '../../actions/bill';

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
        processForm: (bill) => dispatch(addBill(bills)),

        closeModal: () => dispatch(closeModal()),

        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),

        fetchUsers: () => dispatch(fetchUsers()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBillForm);
