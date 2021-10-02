import React from 'react';
import { Link } from 'react-router-dom';

class HomepageLeftsidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='left-sidebar'>
                <div className='sidebar-actions'>
                    <div className='dashboard'>
                        <Link to="" className='dashboard-link'>
                            <img className='dashboard-icon' src={window.logo_signup} alt="" />
                            <p className='dashboard-text'> Dashboard </p>
                        </Link>
                    </div>
                    <div className='all-expenses'>
                        <Link to="" className='all-expenses-link'>
                            <img className='all-expenses-icon' src={window.all_expenses_icon} alt="" />
                            <p className='dashboard-text'> All expenses </p>
                        </Link>
                    </div>
                    {/* <div className='add-friends'>
                        <AddFriend
                            fetchUsers={this.props.fetchUsers}
                            currentUser={this.props.currentuser}
                            addFriend={this.props.addFriend}
                            usersIndex={this.props.usersIndex}
                            fetchFriends={this.props.fetchFriends}
                            friends={this.props.friends}
                        />
                    </div> */}
                    
                </div>

            </div>
        )
    }
}

export default HomepageLeftsidebar;