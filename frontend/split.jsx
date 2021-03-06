import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

// actions import
import { addBill, deleteBill, fetchBill, fetchBills, updateBill } from './actions/bill_actions'
import { addFriend, deleteFriend, fetchFriend, fetchFriends } from './actions/friend_actions'
import { login, logout } from './actions/session_actions'
import { createUser, fetchUser, fetchUsers } from './actions/user_actions'
import { fetchComments, fetchComment, addComment, updateComment, deleteComment } from './actions/comment_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = undefined;
  // console.log(`current user: ${window.currentuser.username}`);
  
  if (window.currentuser) {
    preloadedState = {
      session: { id: window.currentuser.id },
      entities: {
        users: { [window.currentuser.id]: window.currentuser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentuser;
  } else {
    store = configureStore();
  }
  
  // if (preloadedState===undefined) preloadedState = configureStore();
  
  // actions appended to window context
      // bills
  window.addBill = addBill;
  window.deleteBill = deleteBill;
  window.fetchBill = fetchBill;
  window.fetchBills = fetchBills;
  window.updateBill = updateBill;
    // comments
  window.fetchComments = fetchComments;
  window.fetchComment = fetchComment;
  window.addComment = addComment;
  window.updateComment = updateComment;
  window.deleteComment = deleteComment;
      // friends
  window.addFriend = addFriend;
  window.deleteFriend = deleteFriend;    
  window.fetchFriend = fetchFriend;
  window.fetchFriends = fetchFriends;
      // session
  window.login = login;
  window.logout = logout;
      // user
  window.createUser = createUser;
  window.fetchUser = fetchUser;
  window.fetchUsers = fetchUsers;
      // store
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<h1>My super awesome app is on it's way...</h1>, root)
})