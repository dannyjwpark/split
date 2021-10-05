import React from 'react';


export default class FriendAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friend: 'John Doe',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriends(this.props.currentUser.id);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user_id = this.props.currentUser.id;
        // const friend_id = Object.values(this.state.friend).length + 1;
        // const friend_email = this.state.friend + Math.floor(Math.random() * 1000).toString() + '@split.com';
        
        // const formData = new FormData();
        // formData.append('friend[name]', this.state.friend)
        // formData.append('friend[email]', friend_email)

        const friend = { friend_user_id: user_id, name: this.state.friend };
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
        // {console.log('props in friend_add_form')}
        // {console.log(this.props)}
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
