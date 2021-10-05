import React from 'react';
import { Link } from 'react-router-dom';
import FriendAddForm from '../../friend/friend_add_form';
import FriendList from '../../friend/friend_list';

class HomepageLeftsidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='left-sidebar'>
                <div className='sidebar-actions'>
                    <div className='dashboard'>
                        <Link to="/home" className='dashboard-link'>
                            <img className='dashboard-icon' src={window.logo_signup} alt="" />
                            <p className='dashboard-text'> Dashboard </p>
                        </Link>
                    </div>
                    <div className='all-expenses'>
                        <Link to="/bills" className='all-expenses-link'>
                            <img className='all-expenses-icon' src={window.all_expenses_icon} alt="" />
                            <p className='expense-text'> All expenses </p>
                        </Link>
                    </div>
                    <FriendList
                            addFriend={this.props.addFriend}
                            deleteFriend={this.props.deleteFriend}
                            currentUser={this.props.currentUser}
                            friends={this.props.friends}
                            fetchFriends={this.props.fetchFriends}
                            users={this.props.users}
                            className='friend-list'
                        />
                    <FriendAddForm
                        addFriend={this.props.addFriend}
                        currentUser={this.props.currentUser}
                        fetchFriends={this.props.fetchFriends}
                        friends={this.props.friends}
                        users={this.props.users}
                        className='friend-add-form'
                    />
                    
                </div>

            </div>
        )
    }
}

export default HomepageLeftsidebar;