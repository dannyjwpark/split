import React from 'react';
import { connect } from 'react-redux';

// actions import
import { addBill, deleteBill, fetchBill, fetchBills, updateBill } from '../../../actions/bill_actions'
import { addFriend, deleteFriend, fetchFriends, fetchFriend } from '../../../actions/friend_actions'
import Homepage from './homepage';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../../actions/user_actions'


const mapStateToProps = ({ session, entities: { users, friends, bills } }) => {
// const mapStateToProps = (state) => {
    return {
        bills: Object.values(bills),
        currentuser: users[session.id],
        friends: Object.values(friends),
        users: Object.values(users),
        usersObj: users
        // currentuser: state.entities.users[state.session.id],
        // entities: entities,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        addFriend: (friend) => dispatch(addFriend(friend)),
        deleteFriend: (friend) => dispatch(deleteFriend(friend)),
        fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
        fetchFriend: (friend) => dispatch(fetchFriend(friend)),

        logout: () => dispatch(logout()),
        fetchUser: (user_id) => dispatch(fetchUser(user_id)),
        fetchUsers: () => dispatch(fetchUsers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);





// const mapStateToProps = ({ session, entities: { users, friends, bills } }) => {
//     return {
//         bills: Object.values(bills)
//         currentuser: users[session.id],
//         friends: Object.values(friends),
//         usersIndex: Object.values(usersIndex),
//         usersIndexObj: usersIndex,
//     };
// };

// const mapDispatchToProps = dispatch => ({


// addFriend: (friend) => dispatch(addFriend(friend)),
// deleteFriend: (friend) => dispatch(deleteFriend(friend)),
// fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
// fetchFriend: (friend) => dispatch(fetchFriend(friend)),



// logout: () => dispatch(logout()),
// fetchUser: (userId) => dispatch(fetchUser(user_id)),
// fetchUsers: () => dispatch(fetchUsers()),

//     addExpenseForm: (
//         <button className='db-add-expense-btn' onClick={() => dispatch(openModal('addexpense'))}>
//             Add a bill
//         </button>
//     ),
//     closeModal: () => dispatch(closeModal()),



// });

// export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
