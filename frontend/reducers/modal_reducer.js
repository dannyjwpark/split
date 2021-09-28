// for "Adding Expense" form
// source: https://open.appacademy.io/learn/swe-campus-hybrid/full-stack-project/modalbnb

import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}
