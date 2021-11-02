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
    // debugger;
    // this.props.comments.map((k,v) => {
    //   console.log("comment" + k + ": " + this.props.comments)
    // })
    console.log(this.props.comments);

    return (
      <div>
        <p>Comments: </p>
        <ul className="comment-list">
          {Object.keys(this.props.comments).map((k,v) => 
            <li className="comment-item">
              <div className="comment-item-user">
                {this.props.comments[k].commenter_id}
              </div>
              <div className="comment-item-comment">
                {this.props.comments[k].comment}
              </div>
            </li>
          )}
        </ul>

      </div>
    )
  }
}