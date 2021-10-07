import React from 'react';
import { withRouter } from 'react-router-dom';

class AddBillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: `${this.props.currentUser.id}`,
            amount: '0.00',
            category: 'General',
            description: 'Enter a description:',
            friends: `${this.props.friends}`,
            friend_list: [],
            notes: 'Add notes',
            payer_id: `${this.props.currentUser.id}`,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.selectFriend = this.selectFriend.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriends(this.props.currentUser.id);
    }

    handleSubmit(e) {
        e.preventDefault();
        const bill = Object.assign({}, this.state);
        this.props.processForm(bill).then(this.props.closeModal);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updateFriend(field){

    }


    // selectFriend(friend_name) {
    //     let friend_list = Object.values(this.state.friends).map((friend) => friend.name);
    //     for(let i=0; i<friend_list.length; i++){
    //         if(friend_list[i] === friend_name){
    //             friend_list.push(friend_list[i])
    //         }
    //     }
        
    //     this.setState({ friends: friend_list })
    // }

    render() {
        const friendsList = Object.values(this.props.friends);

        const amountQuota = this.state.amount / (friendsList.length + 1)
        const numFriends = parseFloat(amountQuota.toFixed(2));

        return (

            <div className="add-bill-form-container">
                <form onSubmit={this.handleSubmit} className="add-bill-form">

                    <header className="add-bill-header">
                        <p>Add an expense</p>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                    </header>

                    <div className='add-bill-friends'>
                        <div className='friends-text'>
                            <p className='friends-text-regular'> With&nbsp; </p>
                            <p className='friends-text-bold'> you&nbsp; </p>
                            <p className='friends-text-regular'> and friend:&nbsp; </p>
                            <select className='friend-list-selector' onChange={this.updateFriend('friend_list')} value={this.props.friend_list}>
                                {
                                    friendsList.forEach((friend) => {
                                        <option value={friend}></option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className='add-bill-details-1'>
                        <div className='add-bill-details-left'>
                            <div className='category-list'>
                                <select className='category-selector' onChange={this.update('category')} value={this.state.category}>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Food and Drink">Food and Drink</option>
                                    <option value="Home">Home</option>
                                    <option value="Life">Life</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Uncategorized">Uncategorized</option>
                                    <option value="Utilities">Utilities</option>
                                </select>
                            </div>

                            <img src={window.category_choose_icon} alt="" className='category-icon-medium' />

                        </div>

                        <div className='add-bills-details-right'>

                            <div className='add-bill-desc-amt'>
                                <input type="text"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    className="add-bill-desc"
                                />
                                <br />
                                <br />
                                <div className='amt-container'>
                                    <span className='currency-code'>$ </span>
                                    <input type="text"
                                        value={this.state.amount }
                                        onChange={this.update('amount')}
                                        className="add-bill-amt"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='add-bill-details-2'>
                        <div className='details-2-top'>
                            Paid by
                            <div className='add-bill-paidby'>
                                <select className='paidby-selector' onChange={this.update('payer_id')} value={this.state.payer_id}>
                                    <option value={this.props.currentUser.id}>you</option>
                                    {
                                        friendsList.forEach((friend, i) =>
                                            <option value={friend} key={i}>
                                                {friend}
                                            </option>
                                        )
                                    }
                                </select>
                            </div>
                            &nbsp;and split equally.
                        </div>
                        <div className='details-2-middle'>
                            ($
                            {numFriends}
                            /person)
                        </div>
                        <div className='details-2-bottom'>
                            Notes:
                            <br />
                            <textarea
                                value={this.state.notes}
                                onChange={this.update('notes')}
                                className="add-bill-notes"
                            />
                        </div>

                    </div>

                    <div className="add-bill-buttons">
                        <input className="add-bill-cancel" type="submit" value="Cancel" onClick={this.props.closeModal} />
                        <input className="add-bill-save" type="submit" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(AddBillForm);
