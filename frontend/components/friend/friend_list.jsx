import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className='friend-list-title'>
                    <p className='invisible-space'>______</p>
                    <p className='friends-text'>FRIENDS</p>
                    <p className='invisible-space'>____</p>
                </div>
                
                <ul className='friend-list-container'>
                    {/* {console.log('this.props @ friend_list: ')} */}
                    {/* {console.log(this.props)} */}
                    {
                    this.props.friends.map ( (friend, i) => 
                        <li className='friend-list' key={`Friend #${i}: `}>
                            <img src={window.user_icon} className='user-icon' alt="" />
                            <Link to={`/friends/${friend.id}`} className='friend-show-link'>
                                <div className='friend-names'>
                                    {friend.name}
                                </div>
                            </Link>
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}