import { combineReducers } from 'redux';
import billsReducer from './bills';
import sessionReducer from './session';

const RootReducer = combineReducers({
    entities: billsReducer,
    session: sessionReducer,
});

export default RootReducer;