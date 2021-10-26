import React from 'react';


export default class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 'Add a comment',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const comment = { 
      bill_id: this.props.bill.id
    };

    this.props.addComment(comment);
    this.props.fetchComments(this.props.bill.id);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} className='add-comment-form'>
          {/* <p className='add-comment-wrd'>Add Comment</p> */}
            <input className='users-index-box' 
              onChange={this.update('comment')} 
              // value={this.state.bill} 
              value={this.state.comment} 
            />
            <br />
            <div className='submit-button-add-comment'>
              <input className="add-comment-submit" type="submit" value='Post' />
            </div>
      </form>
      </div>
    )
  }
}
