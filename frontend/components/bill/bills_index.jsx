import React from 'react';
import BillIndexItem from './bill_index_item';

export default class BillsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='bill-index-container'>
                <ul>
                    {
                        this.props.bills.map((bill) => (
                            <BillIndexItem
                                key={bill.id}
                                bill={bill}

                                addBill={this.props.addBill}
                                deleteBill={this.props.deleteBill}
                                fetchBill={this.props.fetchBill}
                                updateBill={this.props.updateBill}

                                currentUser={this.props.currentUser}
                                friends={this.props.friends}
                                users={this.props.users}
                                usersObj={this.props.usersObj}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }

}