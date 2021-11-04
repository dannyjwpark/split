import React from 'react';
import { Route , withRouter, useHistory} from 'react-router-dom';


export default class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 'Add a comment',
      comments: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.bill.id);

    let comment_list = [];
    Object.keys(this.props.comments).map((k,v) => comment_list.push(this.props.comments[k]));
    this.setState({comments: comment_list});
  }

  componentDidUpdate() {
    this.props.fetchComments(this.props.bill.id);
  }


  handleSubmit(e) {
    e.preventDefault();

    const comment = { 
      bill_id: this.props.bill.id,
      commenter_id: this.props.currentUser.id,
      comment: this.state.comment,
    };

    // debugger;
    this.props.addComment(comment)
      .then(() => this.props.fetchComments(this.props.bill.id))
      .then(() => this.setState(state => {
        let comments = state.comments;
        comments[comments.length] = {
          commenterId: this.props.currentUser.id,
          billId: this.props.bill.id,
          comment: this.state.comment,
          createdAt: 'Now',
          updatedAt: 'Now',

        }
        return {
          comment: this.state.comment,
          comments,
          }
        }
      )
    );
    this.forceUpdate();
  }

  update() {
    return e => {
      this.setState({ comment: e.target.value })
    }
    // return e => this.setState({
    //   [field]: e.currentTarget.value
    // });
  }


  render() {
    console.log(this.state.comments);
    return (
      <div>
      <form onSubmit={this.handleSubmit} className='add-comment-form'>
          {/* <p className='add-comment-wrd'>Add Comment</p> */}
            <input className='comment-index-box' 
              onChange={this.update()} 
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
