import React from 'react';
import { Link } from 'react-router-dom';


export default class FriendAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friend: 'Name:',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        // debugger
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        window.fetchUsers();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user_id = this.props.currentuser.id;
        const friend_id = this.state.friend.id;
        const friend = { user_id, friend_id }
        this.props.addFriend(friend);
        this.props.fetchFriends();
        // this.props.processForm(user).then(() => this.props.history.push("/dashboard"));
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className='add-friend-form'>
                <p className='add-friend-wrd'>Add Friends</p>
                <input className='users-index-box' onChange={this.update('friend')} value={this.state.friend} />
                    {
                        this.props.users.map((user, i) => {
                            const friend_list = this.props.friends.map((friend) => friend.id)
                            if (i === 0) {
                                return (<option key={`user #${i}: `} value={user.id}>
                                    
                                </option>)
                            }
                            else if (user.id !== this.props.currentUser.id && !friend_list.includes(user.id)) {
                                return (<option key={`user #${i}: `} value={user.id}>
                                    {user.username}
                                </option>)
                            }
                        })
                    }
                <br />
                <input className="add-friend-submit" type="submit" value='Add Friend' />
            </form>
        )
    }
}
