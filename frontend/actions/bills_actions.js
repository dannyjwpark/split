import * as BillsUtil from '../util/Bills_api_util'

// action constants

export const RECEIVE_BILLS = 'RECEIVE_BILLS'
export const RECEIVE_BILL = 'RECEIVE_BILL'
export const REMOVE_BILL = 'REMOVE_BILL'

const receiveBills = (bills) => {
    return ({
        type: RECEIVE_BILLS,
        bills
    })
}
const receiveBill = (bill) => {
    return ({
        type: RECEIVE_BILL,
        bill
    })
}
const removeBill = (billId) => {
    return ({
        type: REMOVE_BILL,
        billId
    })
}

// thunk action creators
export const fetchBills = () => dispatch => {
    return BillsUtil.fetchBills()
        .then(bills => (dispatch(receiveBills(bills))
    ))
};

export const fetchBill = (billId) => dispatch => {
    return BillsUtil.fetchBill(billId)
        .then(bill => (dispatch(receiveBill(bill))
    ))
};

export const addBill = (bill) => dispatch => {
    return BillsUtil.addBill(bill)
        .then(bill => (dispatch(receiveBill(bill))
    ))
};
export const updateBill = (bill) => dispatch => {
    return BillsUtil.updateBill(bill)
        .then(expense => (dispatch(receiveBill(bill))
    ))
};

export const deleteBill = (billId) => dispatch => {
    return BillsUtil.deleteBill(billId)
        .then(bill => (dispatch(removeBill(bill.id))
    ))
};