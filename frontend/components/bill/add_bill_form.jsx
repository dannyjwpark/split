import React from 'react';
import { withRouter } from 'react-router-dom';

class AddBillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: `${this.props.currentUser.id}`,
            amount: '',
            category: 'General',
            description: '',
            friends_arr: [],
            notes: '',
            payer_id: `${this.props.currentUser.id}`,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectedFriend = this.selectedFriend.bind(this);
    }

    navigateToHome() {
        const url = `/home`;
        this.props.history.push(url);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const bill = Object.assign({}, this.state);
        this.props.processForm(bill).then(this.props.closeModal);
    }


    selectedFriend(friendName) {
        let currArr = this.state.friends_arr;
        this.props.friends.forEach(friend => {
            if (friend.name == friendName) {
                currArr.push(friend.id)
            }
        })
        this.setState({ friends_arr: currArr })
    }

    render() {

        const friendsList = this.props.friends.map((friend) => friend.name)

        const perPerson = this.state.amount / (this.state.friends_arr.length + 1)

        const perPerson2 = perPerson.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })



        return (

            <div className="add-bill-form-container">
                <form onSubmit={this.handleSubmit} className="add-bill-form">

                    <header className="add-bill-header">
                        <p>Add an expense</p>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                    </header>

                    <div className='add-bill-friends'>
                        <div className='friends-text'>
                            With
                            <p id='font-bold'> you </p>
                            and friend
                        </div>
                    </div>

                    <div className='add-bill-details-1'>
                        <div className='add-bill-details-left'>
                            <div className='category-list'>
                                <select className='category-selector' onChange={this.update('category')} value={this.state.category}>
                                    <option value="General">General</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Food and Drink">Food and Drink</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Entertainment">Entertainment</option>
                                </select>
                            </div>

                            <img src={window.category_icon} alt="" className='category-icon-medium' />

                        </div>

                        <div className='add-bills-details-right'>

                            <div className='add-bill-desc-amt'>
                                <span>Enter a description:</span>
                                <input type="text"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    className="add-bill-desc"
                                />
                                <br />
                                <br />
                                <span>Amount:</span>
                                <br />
                                <input type="text"
                                    value={this.state.amount}
                                    onChange={this.update('amount')}
                                    className="add-bill-amt"
                                />
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
                                        this.state.friends_arr.map((friend_id, i) =>
                                            <option value={friend_id} key={`friend_id-${i}`}>
                                                {this.props.usersObj[friend_id].name}
                                            </option>
                                        )
                                    }
                                </select>
                            </div>
                            and split equally.
                        </div>
                        <div className='details-2-middle'>
                            {/* per person calculation */}
                            ($
                            {perPerson2}
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
                        <input className="add-bill-cancel" type="submit" value="Cancel" onClick={this.navigateToHome} />
                        <input className="add-bill-save" type="submit" value="Save" />
                    </div>

                </form>
            </div>
        );
    }
}

export default withRouter(AddBillForm);
