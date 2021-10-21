import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from 'react-router-dom';
import Select from 'react-select'

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 5, fontSize: 11 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  }
};

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

  // componentDidMount() {
  //   console.log(this.state.friend_list);
  // }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    const bill = { 
      author_id: this.state.author_id, 
      amount: this.state.amount, 
      category: this.state.category, 
      description: this.state.description, 
      friend_list: this.state.friend_list,
      notes: this.state.notes,
      num_payers: this.state.friend_list.length,
      payer_id: this.state.payer_id,
    }
    this.props.processForm(bill)
      .then(this.props.closeModal)
      .then(this.props.history.push("/bills"));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  onChange = (e, option) => {
    if (option.removedValue && option.removedValue.isFixed) return;

    this.setState({
      friend_list: e
    });
    console.log('friend_list: ')
    console.log(this.state.friend_list);
  };



  render() {
    const friendsList =
      this.props.friends !== null &&
      this.props.friends.map(friend => ({
        value: friend.id,
        label: friend.name,
        isFixed: true // true : false
      }));

    const amountQuota = this.state.amount / (this.state.friend_list.length + 1)
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
              {/* <select className='friend-list-selector' 
                  onChange={this.update('friend_list')} 
                  value={this.props.friends} 
                  multiple={true}
              >
                  {
                      this.props.friends.map((friend, i) =>
                          <option className='friend-list-selector-item' key={`Friend #${i}: `} onClick={this.selectFriend}>
                                  {friend["name"]}
                          </option>
                      )
                  }
              </select> */}
              <Select
                isMulti
                value={this.state.friend_list}
                onChange={this.onChange}
                options={friendsList || []}
                className="friend-list-selector"
                classNamePrefix="select"
                styles={styles}
              />
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
                    this.props.friends.map((friend, i) =>
                      <option className='friend-list-selector-item' key={`Friend #${i}: `} value={friend.id} onClick={this.update('payer_id')}>
                        {friend["name"]}
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
