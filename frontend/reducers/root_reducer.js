import { combineReducers } from 'redux';
import billReducer from './bill_reducer';
import friendReducer from './friend_reducer';
import modalReducer from './modal_reducer'
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';

const RootReducer = combineReducers({
    bills: billReducer,
    friends: friendReducer,
    modal: modalReducer,
    session: sessionReducer,
    users: userReducer
});

export default RootReducer;