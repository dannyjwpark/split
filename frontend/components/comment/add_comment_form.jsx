import React from 'react';
import { createHashHistory } from 'history';

export const history = createHashHistory({forceRefresh:true});


export default class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 'Add a comment',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.refresh()
    }, 1000)
  }

  refresh() {
    this.props.fetchComments(this.props.bill.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const year = new Date().getFullYear();
    // const yearIdx = new Date().toString().indexOf(year);
    const comment = { 
      bill_id: this.props.bill.id,
      commenter_id: this.props.currentUser.id,
      comment: this.state.comment,
      // created_at:  new Date().toString().slice(0,yearIdx + 4)
    };

    this.props.addComment(comment);
    this.props.fetchComments(this.props.bill.id).then(() => history.push(`/bills/${this.props.bill.id}`));

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
            <input className='comment-index-box' 
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
