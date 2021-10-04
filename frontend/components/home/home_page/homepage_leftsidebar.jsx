import React from 'react';
import { Link } from 'react-router-dom';
import FriendAddForm from '../../friend/friend_add_form';

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
                        <Link to="" className='all-expenses-link'>
                            <img className='all-expenses-icon' src={window.all_expenses_icon} alt="" />
                            <p className='expense-text'> All expenses </p>
                        </Link>
                    </div>
                    <div className='add-friend'>
                        <span className='friend-list'>
                            <p className='friends-text'>FRIENDS</p>
                            <p className='invisible-space'>_________</p>
                            <div className='add-button'>
                                <p className='add-button-plus'>+</p>
                                <p className='add-button-add'>add</p>
                            </div>
                        </span>

                    </div>
                    {/* <FriendAddForm
                        currentuser={this.props.currentuser}
                        friends={this.props.friends}
                        fetchFriends={this.props.fetchFriends}
                    /> */}
                    
                </div>

            </div>
        )
    }
}

export default HomepageLeftsidebar;