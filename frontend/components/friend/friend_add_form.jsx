import React from 'react';
import { Link } from 'react-router-dom';


export default class FriendAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friend: 'John Doe',
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
                <select className='users-index-box' onChange={this.update('friend')} value={this.state.friend} >
                    {
                        this.props.users.map((user, i) => {
                            const friends_arr = this.props.friends.map((ele) => ele.id)
                            if (i === 0) {
                                return (<option key={`user-${i}`} value={user.id}>
                                    + add
                                </option>)
                            }
                            else if (user.id !== this.props.currentUser.id && !friends_arr.includes(user.id)) {
                                return (<option key={`user-${i}`} value={user.id}>
                                    {user.name}
                                </option>)
                            }
                        })
                    }
                </select>
                <br />
                <input className="add-friend-submit" type="submit" value='Add Friend' />
            </form>
        )
    }
}
