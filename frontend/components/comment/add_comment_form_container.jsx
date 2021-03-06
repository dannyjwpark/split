import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

import AddCommentForm from './add_comment_form';
import { addComment } from '../../actions/comment_actions';

const mapStateToProps = ({ session, entities: { bill, bills, friends, users } }) => {
    return {
        formType: 'addComment',

        bill: bill,
        bills: Object.values(bills),
        currentUser: users[session.id],
        friends: Object.values(friends),
        users: Object.values(users),
        usersObj: users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),
        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),

        fetchBills: () => dispatch(fetchBills()),
        fetchBill: (bill) => dispatch(fetchBill(bill)),

        fetchComments: bill_id => dispatch(fetchComments(bill_id)),
        fetchComment: comment => dispatch(fetchComment(comment)),
        addComment: comment => dispatch(addComment(comment)),
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),

        
        fetchUser: (user_id) => dispatch(fetchUser(user_id)),
        fetchUsers: () => dispatch(fetchUsers()),
        logout: () => dispatch(logout()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);
