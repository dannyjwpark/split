import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import FriendExpensesIndexItem from './friend_expenses_index_item'

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
      friendconst = this.props.friend;
    }

    let billsArr = []
    
    if (Object.keys(this.props.bills).length > 0 ) {
      const billsconst = this.props.bills;
      billsconst.forEach ( (bill) => {
        // let friendNames = [];
        console.log(bill);
        // Object.keys(bill.friendList).map((k,v) => friendNames.push(friendList[k].label));

        // if(friendNames.includes(friend.name) || (bill.authorId === this.props.friend.id)){
          billsArr.push(bill)
        // }
      })
    }
    // const ownBills = this.props.bills.filter((bill) => 
    //   (bill.authorId === this.props.friend.id) || (bill.payerId === this.props.friend.id) || (
    //     Object.keys(bill.friendList).forEach((k,v) => 
    //       friendList[k].label === friend.name
    //     )  
    //   )
    // );
    // let ownBills = [];
    // billsArr.each((bill) => 
    //   Object.keys(bill.friendList).each((k,v) => 
    //     if(bill.friendList[k].label === this.props.friend.name){
    //       ownBills.push(bill)
    //     }
    //   )
    // )
    

        


    // debugger

    return(
      
    <ul>
      {
        billsArr.map((bill) => (
          // <BillIndexItem
          <FriendExpensesIndexItem
            key={bill.id}
            bill={bill}

            fetchBill={this.props.fetchBill}
            addBill={this.props.addBill}
            updateBill={this.props.updateBill}
            deleteBill={this.props.deleteBill}

            currentUser={this.props.currentUser}
            friend={this.props.friend}
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
