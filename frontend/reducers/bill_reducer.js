import { RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL } from '../actions/bills_actions';

const billsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_BILLS:
            return action.bills;

        case RECEIVE_BILL:
            return Object.assign({}, oldState, { [action.bill.id]: action.bill });

        case REMOVE_BILL:
            delete nextState[action.billId];
            return nextState;

        default:
            return oldState;
    }
};

export default billsReducer;