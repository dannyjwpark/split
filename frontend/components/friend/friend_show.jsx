import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import HomepageNavbar from '../home/home_page/homepage_navbar';
import HomepageLeftsidebar from '../home/home_page/homepage_leftsidebar';

export default class FriendShow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteFriend = this.deleteFriend.bind(this);
    }

    deleteFriend() {
        const user_id = this.props.currentUser.id
        const friend_id = this.props.friend.id
        const friend = { user_id: user_id, friend_id: friend_id }
        this.props.deleteFriend(friend);
        this.props.fetchFriends(user_id).then(() => this.props.history.push("/home"))
    }

    render() {
        return (
            <div className='homepage-wrapper'>
                <header className='homepage-navbar'>
                    <HomepageNavbar logout={this.props.logout} currentUser={this.props.currentUser} />
                </header>

                <section className='homepage-main'>

                    <aside className='homepage-leftsidebar'>
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
                    </aside>

                    <section className='homepage-centercolumn'>
                        <div className='db-center-header'>
                            <span className='db-header-wrd'>Friend Expenses</span>
                            {this.props.addExpenseForm}
                        </div>

                        <div className='db-expenses-index'>
                            <FriendExpensesIndex
                                fetchExpenses={this.props.fetchExpenses}
                                fetchExpense={this.props.fetchExpense}
                                addExpense={this.props.addExpense}
                                updateExpense={this.props.updateExpense}
                                deleteExpense={this.props.deleteExpense}

                                currentUser={this.props.currentUser}
                                friends={this.props.friends}
                                expenses={this.props.expenses}
                                users={this.props.users}
                                usersObj={this.props.usersObj}
                                friend={this.props.friend}

                            />
                        </div>
                    </section>

                    <section className='homepage-rightsidebar'>
                        <button className='remove-friend-btn' onClick={this.deleteFriend}>
                            Remove this friend
                        </button>

                    </section>

                </section>

            </div>
        )
    }

}