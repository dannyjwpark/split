import React from 'react';
import { Route , withRouter, useHistory} from 'react-router-dom';
import { createHashHistory } from 'history';

export const history = createHashHistory({forceRefresh:true});

export default class CommentList extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.refresh()
    }, 1000)
  }


  refresh() {
    this.props.fetchComments(this.props.bill.id);
  }

  handleDelete(id){
    const bill_id = this.props.bill.id;
    const comment = {bill_id: bill_id, id: id}
    this.props.deleteComment(comment);

    this.props.fetchComments(bill_id).then(() => history.push(`/bills/${this.props.bill.id}`));
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
                <div className='time-small-font'>
                  <p className='comment-name-time' key={k}>
                    {this.props.comments[k].createdAt.slice(0,10)} &nbsp;
                    {this.props.comments[k].createdAt.slice(11,16)}
                  </p>
                </div>
                  <button className='comment-delete' onClick={() => this.handleDelete(this.props.comments[k].id)}>
                    {/* <img src={window.delete_icon} alt="" className='comment-delete-button'/> */}
                    <p className='comment-delete-button'> x </p>
                  </button>
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