import { combineReducers } from 'redux';
import billsReducer from './bills';

export default combineReducers({
    bills: billsReducer,
});
