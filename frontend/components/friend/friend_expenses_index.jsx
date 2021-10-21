import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import BillIndexItem from '../bill/bill_index_item'

class FriendExpensesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBills();
  }

  render() {
    let friendconst = {}
    if (this.props.friend) {
      // debugger
      friendconst = this.props.friend
    }

    let billsArr = []
    
    console.log(this.props.bills);
    if (Object.keys(this.props.bills).length > 0 ) {
      const billsconst = this.props.bills;
      billsconst.forEach ( (bill) => {
        billsArr.push(bill)
      })
    } 

    // debugger

    return(
      
    <ul>
      {
        billsArr.map((bill) => (
          <BillIndexItem
            key={bill.id}
            bill={bill}

            fetchBill={this.props.fetchBill}
            addBill={this.props.addBill}
            updateBill={this.props.updateBill}
            deleteBill={this.props.deleteBill}

            currentUser={this.props.currentUser}
            friends={this.props.friends}
            users={this.props.users}
            usersObj={this.props.usersObj}
          />
        ))
      }
    </ul>
  )}

}

export default FriendExpensesIndex;
