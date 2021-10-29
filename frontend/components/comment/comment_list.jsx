import React from 'react';

export default class CommentList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let bill_id = this.props.bill.id;
    this.props.fetchComments(bill_id);
  }

  render() {
    if(!this.props.comments) return null;
    console.log(this.props);

    return (
      <div>
        <p>Comments: </p>
        <ul className="comment-list">
          {this.props.comments.map((comment) => (
            <li className="comment-item">
              <div className="comment-item-user">
                {comment.commenter_id}
              </div>
              <div className="comment-item-comment">
                {comment.comment}
              </div>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}