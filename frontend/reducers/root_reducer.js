import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorReducer from './error_reducer';
import modalReducer from './modal_reducer'
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorReducer,
    modal: modalReducer,
    session: sessionReducer,

});

export default RootReducer;