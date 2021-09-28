import { combineReducers } from "redux";
import billsReducer from "./bill_reducer";
import friendsReducer from "./friend_reducer";

import userReducer from "./user_reducer";

const entitiesReducer = combineReducers({
    bills: billsReducer,
    friends: friendsReducer,
    users: userReducer,
});

export default entitiesReducer;