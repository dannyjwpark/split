import React from 'react';


export default class FriendAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: 'Name',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchFriends(this.props.currentUser.id);
  //   // this.props.fetchUsers();
  // }

  handleSubmit(e) {
    e.preventDefault();
    const friend = { 
      user_id: this.props.currentUser.id, 
      friend_id: 0, 
      name: this.state.friend 
    };

    for(let i=0; i<this.props.users.length; i++){
      if(this.props.users[i].username === this.state.friend){
        friend.friend_id = this.props.users[i].id;
      }
    }
    this.props.addFriend(friend);
    this.props.fetchFriends(this.props.currentUser.id);
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
            <input className='users-index-box' 
              onChange={this.update('friend')} 
              // value={this.state.friend} 
              value={this.state.friend} 
            />
            <br />
            <div className='submit-button-add-friend'>
              <input className="add-friend-submit" type="submit" value='Add Friend' />
              <div className='question-hint-container'>
                <button className='add-friend-question'>?</button>
                <div className='friend-list-invisible'>
                  <p className='friend-list-texts'> Try adding a friend from the 'Friends' show </p>
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
