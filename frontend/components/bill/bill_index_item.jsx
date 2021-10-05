import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';

export default class ExpenseIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
      }

    render() {

        const users_list = Object.values(users);
        // destructuring 'bills' table to consts
        const { author_id, amount, category, description, id, notes, payer_id, split } = this.props.bill;

        let payer_name = '';
        this.props.users_list.forEach(user => {
            if (user.id === payer_id) {
                payer_name = user.name;
            } else if (this.props.currentUser.id === payer_id) {
                payer_name = 'you';
            }
        })

        let author = '';
        this.props.users_list.forEach(user => {
            if (user.id === author_id) {
                author = user.name;
            }
        })

        const amount2 = amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        const num_payees = Object.values(split).length;
        let portion_paid = (amount / num_payees);
        const portion_lent = portion_paid * (num_payees - 1);

        const amount3 = portion_lent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        const split_arr = Object.keys(split);
        const split_arr2 = split_arr.filter(ele => ele != payer_id);

        let payee_1 = '';
        let payee_1_id = split_arr2[0];
        this.props.users_list.forEach(user => {
            if (user.id === payee_1_id) {
                payee_1 = user.name;
            }
        })

        const payee_1_portion = split[payee_1_id];

        let payee_2 = '';
        let payee_2_id = split_arr2[1];
        this.props.users_list.forEach(user => {
            if (user.id === payee_2_id) {
                payee_2 = user.name;
            }
        })

        payee_1 = payee_1 + ' owes ';

        if (payee_2 === '') {
            payee_2 === ''
        } else {
            payee_2 = payee_2 + ' owes '
        }

        portion_paid = portion_paid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        const payee_2_portion = split[payee_2_id];

        const amount4 = payee_1_portion.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        let amount5 = '';

        if (payee_2_portion) {
            amount5 = payee_2_portion.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        }

        return (
            <div className='bill-item'>
                <header className='bill-item-header'>

                    <div className='bill-item-header-left'>
                        <img src={window.category_choose_icon} alt="" className='category_choose_icon_1' />
                        <span className='bill-item-header-description'>{description}</span>
                    </div>

                    <div className='bill-item-header-right'>
                        <div className='bill-payer'>
                            <span className='bill-payer-text'>{payer_name} paid
                            </span>
                            <span className='bill-portion-amount' id='amount1'>{amount2}
                            </span>
                        </div>

                        <div className='bill-lender'>
                            <span className='bill-lender-text'>{payer_name} lent
                            </span>
                            <span className='bill-lent-amount' id='amount2'>{amount3}
                            </span>
                        </div>


                    </div>

                </header>


                <div className='bill-item-center'>

                    <img src={window.category_icon} alt="" className='category_choose_icon_2' />

                    <div className='bill-item-center-content'>

                        <span className='bill-item-center-description'>{description}</span>
                        <span className='bill-item-center-amount' id='money'>{amount2}</span>
                        <span className='bill-item-center-author'>Added by {author}</span>
                        <button className='bill-item-center-edit'>Edit expense</button>


                    </div>
                </div>

                <div className='bill-item-bottom'>
                    <div className='bill-item-bottomleft'>
                        <ul>
                            <li className='bill-item-paid' id='bottomleft-paid1'>
                                <span id='font-bold'>{payer_name}</span> paid <span id='money' className='font-bold-2'>{amount2}</span> and owes <span id='money' className='font-bold-2'>{portion_paid}</span>
                            </li>
                            <li className='bill-item-paid' id='bottomleft-paid2'>
                                <span id='font-bold'>{payee_1}</span>
                                <span id='money' className='font-bold-2'>{amount4}</span>
                            </li>
                            <li>
                                <span id='font-bold'>{payee_2}</span>
                                <span className='font-bold-2'>{amount5}</span>

                            </li>
                        </ul>
                    </div>
                    <div className='bill-item-right'>
                        <div className='bill-item-right-category'>
                            <div className='bill-item-paid'>
                                <span id='font-bold' >Category: </span>
                                {category}
                            </div>
                        </div>
                        <div className='bill-item-right-notes'>
                            <span id='font-bold' className='bill-item-paid'>Notes:</span>
                            <br />
                            <span>{notes}</span>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

