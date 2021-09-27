import { combineReducers } from 'redux';
// import billsReducer from './bill_reducer';
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
    // bills: billsReducer,
    session: sessionReducer,
});

export default RootReducer;