import React from 'react';

import AddBillForm from './add_bill_form';
import HomepageNavbar from '../home/home_page/homepage_navbar';
import HomepageLeftsidebar from '../home/home_page/homepage_leftsidebar';
import BillsIndex from './bills_index';
import modal from '../modal/modal';

export default class AllBills extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='homepage-wrapper'>
                <div className='homepage-navbar'>
                    <HomepageNavbar 
                        logout={this.props.logout} 
                        currentUser={this.props.currentUser} 
                    />
                </div>

                <div className='homepage-main'>
                    <div className='homepage-leftsidebar'>
                        <HomepageLeftsidebar
                            fetchFriends={this.props.fetchFriends}
                            fetchFriend={this.props.fetchFriend}
                            addFriend={this.props.addFriend}
                            deleteFriend={this.props.deleteFriend}
                            fetchUsers={this.props.fetchUsers}
                            currentUser={this.props.currentUser}
                            friends={this.props.friends}
                            users={this.props.users}
                        />
                    </div>

                    <div className='homepage-centercolumn'>
                        <div className='homepage-centercolumn-bill-header'>
                            <span className='homepage-centercolumn-bill-text'>All expenses</span>
                            {/* {this.props.AddBillForm} */}
                            <AddBillForm />
                        </div>


                        <div className='homepage-centercolumn-bills-index'>
                            <BillsIndex
                                fetchBills={this.props.fetchBills}
                                fetchBill={this.props.fetchBill}
                                addBill={this.props.addBill}
                                updateBill={this.props.updateBill}
                                deleteBill={this.props.deleteBill}

                                currentUser={this.props.currentUser}
                                friends={this.props.friends}
                                bills={this.props.bills}
                                users={this.props.users}
                                usersObj={this.props.usersObj}
                            />
                        </div>

                    </div>

                    <div className='homepage-rightsidebar'>
                        <br />
                        <p className='homepage-rightsidebar-balance'>
                            Your Balance
                        </p>
                        <br />
                        <p className='homepage-rightsidebar-amount'>
                            ____ owes you $__
                        </p>
                        <br />
                    </div>

                </div>

            </div>
        )
    }
}

