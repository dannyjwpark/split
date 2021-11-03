import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import AddCommentForm from '../comment/add_comment_form';
import CommentList from '../comment/comment_list';
import styled from "styled-components";

const linkStyle = {
  textDecoration: "none",
  color: 'inherit'
}

export default class FriendExpensesIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchBill(this.props.bill.id);
    }

    render() {
      // debugger;
        const users_list = Object.values(this.props.friends);
        const { author_id, amount, category, created_at, description, friendList, notes, num_payers, payer_id } = this.props.bill;

        // console.log("props.bill at bill_index_item: ")
        // console.log(this.props.bill);

        // console.log("friend_list: " + Object.values(friend_list));
        let payer_name = '';
        // let payer_name = 'you';
        this.props.friends.forEach(user => {
            if (user.id === this.props.bill.payer_id) {
                payer_name = user.name;
            } else if (this.props.currentUser.id === this.props.bill.payer_id) {
                payer_name = 'you';
            }
        })

        if(payer_name === ''){
            payer_name = 'you'
        };

        let author_name = '';
        this.props.friends.forEach(user => {
            if (user.id === author_id) {
                author_name = user.name;
            }
        })

        if (author_name === '') {
            author_name = 'you'
        };

        // const amount2 = amount.toFixed(2).toString();
        const amount2 = amount;

        // const num_payers = Object.values(split).length;
        // let portion_paid = (amount / num_payers);
        // const portion_lent = portion_paid * (num_payers - 1);

        // const amount3 = portion_lent.toFixed(2).toString();

        // const friends_split = friend_list;
        // const friends_split2 = friends_split.filter(ele => ele.value != payer_id);

        // let payer_1 = '';
        // let payer_1_id = friends_split2[0];
        // this.props.users_list.forEach(user => {
        //     if (user.id === payer_1_id) {
        //         payer_1 = user.name;
        //     }
        // })

        // const payer_1_portion = split[payer_1_id];

        // let payer_2 = '';
        // let payer_2_id = friends_split2[1];
        // this.props.users_list.forEach(user => {
        //     if (user.id === payer_2_id) {
        //         payer_2 = user.name;
        //     }
        // })

        // payer_1 = payer_1 + ' owes ';

        // if (payer_2 === '') {
        //     payer_2 === ''
        // } else {
        //     payer_2 = payer_2 + ' owes '
        // }

        // portion_paid = portion_paid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // const payer_2_portion = split[payer_2_id];

        // const amount4 = payer_1_portion.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // let amount5 = '';

        // if (payer_2_portion) {
        //     amount5 = payer_2_portion.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // }


        let friendNames = [];
        Object.keys(friendList).map((k,v) => friendNames.push(friendList[k].label));

        const renderBill = () => {
          if(friendNames.includes(this.props.friend.name) || this.props.friend.id === author_id){
            return(
            <Link to={`/bills/${this.props.bill.id}`} className='bill-show-link' style={linkStyle} key={this.props.bill.id}>
                <header className='bill-item-header'>

                    <div className='bill-item-header-left'>
                        <p>{created_at}</p>
                        <span className='bill-item-header-description'>{description}</span>
                    </div>

                    <div className='bill-item-header-right'>
                        <div className='bill-payer'>
                            <span className='bill-payer-text'>{payer_name} paid
                            </span>
                            {/* <span className='bill-portion-amount'>{amount2} */}
                            <span className='bill-portion-amount'> {amount}
                            </span>
                        </div>

                        <div className='bill-lender'>
                            <span className='bill-lender-text'>{payer_name} lent
                            </span>
                            {/* <span className='bill-lent-amount'>{amount3} */}
                            <span className='bill-lent-amount'> {amount / this.props.bill.num_payers * (this.props.bill.num_payers - 1)}
                            </span>
                        </div>


                    </div>
                </header>


                <div className='bill-item-center'>

                    <img src={window.category_choose_icon} alt="" className='category_choose_icon_1' />

                    <div className='bill-item-center-content'>

                        <span className='bill-item-center-description'>{description}</span>
                        <span className='bill-item-center-amount' id='money'>${amount2}</span>
                        <span className='bill-item-center-author'>Added by {author_name}</span>
                        {/* <button className='bill-item-center-edit'>Edit expense</button> */}


                    </div>
                </div>
                
                <div className='bill-item-bottom'>
                    {/* <div className='bill-item-bottomleft'>
                        <ul>
                            <li className='bill-item-paid' id='bottomleft-paid1'>
                                <span id='font-bold'>{payer_name}</span> paid <span id='money' className='font-bold-2'>{amount2}</span> and owes <span id='money' className='font-bold-2'>{portion_paid}</span>
                            </li>
                            <li className='bill-item-paid' id='bottomleft-paid2'>
                                <span id='font-bold'>{payer_1}</span>
                                <span id='money' className='font-bold-2'>{amount4}</span>
                            </li>
                            <li>
                                <span id='font-bold'>{payer_2}</span>
                                <span className='font-bold-2'>{amount5}</span>

                            </li>
                        </ul>
                    </div> */}
                    <div className='bill-item-right'>
                        <div className='bill-item-right-category'>
                            <div className='bill-item-paid'>
                                <span id='font-bold' >Category: </span>
                                {category}
                            </div>
                        </div>
                        <div className='bill-item-right-notes'>
                            <span id='font-bold' className='bill-item-paid'>Notes: &nbsp;</span>
                            <span>{notes}</span>
                        </div>
                        <div className='bill-item-right-friends'>
                            <span id='font-bold' className='bill-item-paid'>Friends involved: &nbsp;</span>
                            {Object.keys(friendList).map((k,v) => 
                              <span key={friendList[k].label}> {friendList[k].label} &nbsp;</span> ) }
                        </div>
                    </div>
                </div>
                
                </Link>
            )
          }
        }



        return (
            <div className='bill-item'>
              {renderBill()}
            </div>
        )

    }
}

