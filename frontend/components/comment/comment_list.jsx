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
      <div className='comment-container'>
        <p className='comment-title'>Comments: </p>
        <ul className="comment-list">
          {Object.keys(this.props.comments).map((k,v) => 
            <li className="comment-item">
              <div className="comment-item-user">
                {this.props.users[this.props.comments[k].commenterId].username} &nbsp;
                <p className='time-small-font'>
                  {this.props.comments[k].createdAt.slice(0,10)} &nbsp;
                  {this.props.comments[k].createdAt.slice(11,16)}
                </p>
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