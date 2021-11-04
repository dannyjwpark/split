import React from 'react';
import { Route , withRouter, useHistory} from 'react-router-dom';
import { createHashHistory } from 'history';

export const history = createHashHistory({forceRefresh:true});

export default class CommentList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comments: [],
    }
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount(){
      this.props.fetchComments(this.props.bill.id);
      this.refresh();
      this.forceUpdate();
  }



  refresh() {
    this.props.fetchComments(this.props.bill.id);

    let comment_list = [];
    Object.keys(this.props.comments).map((k,v) => comment_list.push(this.props.comments[k]));
    this.setState({comments: comment_list});
    
  }

  handleDelete(id){
    const bill_id = this.props.bill.id;
    const comment = {bill_id: bill_id, id: id}
    // debugger

    let new_comments = this.state.comments.filter((comment) => comment.id !== id);
    this.props.deleteComment(comment);
    this.setState(state => {
      const comments = state.comments.filter((comment) => comment.id !== id);
      
      return {
        comments,
      }
    })
  }

  render() {
    if(!this.state.comments) return null;
        
    return (
      <div className='comment-container'>
        <p className='comment-title'>Comments: </p>
        <ul className="comment-list">
          {this.state.comments.map((comment, idx) => 
            <li className="comment-item" key={comment.id}>
              <div className="comment-item-user">
                {this.props.users[comment.commenterId -1].username} &nbsp; <div className='time-small-font'>
                  <p className='comment-name-time' key={comment.createdAt}>
                    {comment.createdAt.slice(0,10)} &nbsp;
                    {comment.createdAt.slice(11,16)}
                  </p>
                </div>
                  <button className='comment-delete' onClick={() => this.handleDelete(comment.id)}>
                    <p className='comment-delete-button'> x </p>
                  </button>
              </div>
              <div className="comment-item-comment" key={comment.comment}>
                {comment.comment}
              </div>
            </li>
          )}
        </ul>

      </div>
    )
  }
}