import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: ''
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(friend) {
        const user_id = this.props.currentUser.id;
        const friend_selected = { user_id: user_id, id: friend.id };
        this.props.deleteFriend(friend_selected);
        this.props.fetchFriends(user_id).then(() => this.props.history.push("/dashboard"));
    }

    getFriend(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    componentDidMount(){
      this.props.fetchFriends(this.props.currentUser.id)
    }

    render() {
        // {console.log('props in friend)list')}
        // {console.log(this.props)}
        return(
            <div>
                <div className='friend-list-title'>
                    <p className='invisible-space'>______</p>
                    <p className='friends-text'>FRIENDS</p>
                    <p className='invisible-space'>____</p>
                </div>
                
                <ul className='friend-list-container'>
                   
                    {
                    this.props.friends.map ( (friend, i) => 
                        <li className='friend-list' key={`Friend #${i}: `} value={friend} >
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