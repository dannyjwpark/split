// import { RECEIVE_BILLS, RECEIVE_SINGLE_BILL } from '../actions/bills';

// export default (state = {}, action) => {
//     Object.freeze(state);
//     const bills = {};
//     switch (action.type) {
//         case RECEIVE_BILLS:
//             action.bills.forEach((bill) => {
//                 bills[bill.id] = bill;
//             });
//             return bills;
//         case RECEIVE_SINGLE_BILL:
//             return Object.assign({}, state, { [action.bill.id]: action.bill });
//         default:
//             return state;
//     }
// };
