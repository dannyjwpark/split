// export const RECEIVE_SINGLE_BILL = "RECEIVE_SINGLE_BILL";
// export const RECEIVE_BILLS = "RECEIVE_BILLS";

// export const receiveBill = bill => {
//     return {
//         type: RECEIVE_SINGLE_BILL,
//         bill: bill
//     };
// }

// export const receiveBills = bills => {
//     return{
//         type: RECEIVE_BILLS,
//         bills: bills
//     };
// }

// export const createBill = (bill) => {
//     return (dispatch) => {
//         return util.createBill(bill).then(
//             (bills) => dispatch(receiveBills(bills)),
//             (err) => dispatch(receiveErrors(err.responseJSON))
//         );
//     };
// };

// export const getBills = () => {
//     return (dispatch) => {
//         return util.fetchBills().then(
//             (bills) => dispatch(receiveBills(bills)),
//             (err) => dispatch(receiveErrors(err.responseJSON))
//         );
//     };
// };

// export const settleBill = (bill) => {
//     return (dispatch) => {
//         return util.settleBill(bill).then(
//             (bills) => dispatch(receiveBills(bills)),
//             (err) => dispatch(receiveErrors(err.responseJSON))
//         );
//     };
// };

