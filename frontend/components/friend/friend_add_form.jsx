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

    componentDidUpdate() {
        this.props.fetchFriends();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user_id = this.props.currentUser.id;
        const friend_id = Object.values(this.state.friend).length + 1;
        const friend = { user_id, friend_id }
        this.props.addFriend(friend);
        this.props.fetchFriends(user_id);
        // this.props.processForm(user).then(() => this.props.history.push("/dashboard"));
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    render() {
        {console.log('props in friend_add_form')}
        {console.log(this.props)}
        return (
            <form onSubmit={this.handleSubmit} className='add-friend-form'>
                <p className='add-friend-wrd'>Add Friends</p>
                    <input className='users-index-box' onChange={this.update('friend')} value={this.state.friend} />
                    <br />
                    <input className="add-friend-submit" type="submit" value='Add Friend' />
            </form>
        )
    }
}
