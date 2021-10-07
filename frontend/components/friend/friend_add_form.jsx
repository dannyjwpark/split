import React from 'react';


export default class FriendAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friend: 'Name',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriends(this.props.currentUser.id);
        // this.props.fetchUsers();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user_id = this.props.currentUser.id;
        const friend = { friend_user_id: user_id, name: this.state.friend };
        this.props.addFriend(friend);
        this.props.fetchFriends(user_id);
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
            <div>
            <form onSubmit={this.handleSubmit} className='add-friend-form'>
                <p className='add-friend-wrd'>Add Friends</p>
                    <input className='users-index-box' onChange={this.update('friend')} value={this.state.friend} />
                    <br />
                    <div className='submit-button-add-friend'>
                        <input className="add-friend-submit" type="submit" value='Add Friend' />
                        <div className='question-hint-container'>
                            <button className='add-friend-question'>?</button>
                            <div className='friend-list-invisible'>
                                <p className='friend-list-texts'> Add a friend from the 'Friends' show </p>
                                <br />
                                <p className='friend-list-texts'> Ross, Rachael, Joey, </p>
                                <p className='friend-list-texts'> Spencer, Phoebe, Monica </p>
                            </div>
                        </div>
                    </div>
                    
            </form>
            </div>
        )
    }
}
