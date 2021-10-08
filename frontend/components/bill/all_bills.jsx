import React from 'react';

import { Link } from 'react-router-dom';
import AddBillForm from './add_bill_form';
import { openModal, closeModal } from '../../actions/modal_actions'


// components that will be included in the page
import HomepageCentercolumn from '../home/home_page/homepage_centercolumn'
import HomepageLeftsidebar from '../home/home_page/homepage_leftsidebar';
import HomepageNavbar from '../home/home_page/homepage_navbar';
import HomepageRightsidebar from '../home/home_page/homepage_rightsidebar';
import BillsIndex from './bills_index';
import modal from '../modal/modal';

export default class AllBills extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        console.log('props @ all bills')
        console.log(this.props.bills);
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
                        <div>
                            <nav className='center-nav'>
                                <nav className='center-nav-left'>
                                    <p>All expenses</p>
                                </nav>

                                <nav className='center-nav-right'>
                                    {/* <button
                                        className='add-bill-button'
                                        currentuser={this.props.currentUser}
                                        onClick={() => dispatch(this.props.openModal('addBill'))}
                                    >
                                        <p className='bill-form-text'>Add an expense</p>
                                    </button> */}

                                    <button
                                        className='settle-up-button'
                                        currentuser={this.props.currentUser}
                                    >
                                        <p className='bill-form-text'>Settle up</p>
                                    </button>
                                </nav>
                            </nav>
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

