import React from 'react';
import CommentList from './comment_list'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: "",
      user: this.props.currentUser.username
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
    this.interval = setInterval(() => {
      this.refresh()
    }, 1000)
  }

  refresh() {
    this.props.fetchComments();
  }

  update(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit(e) {
    const comment = {
      content: this.state.content,
      user: this.state.user
    }

    this.setState({content: ""});
    this.props.addComment(comment);
  }

  render() {
    if(!this.props.comments) return null;

    return (
      <div className='comments-container'>
        <div className='comments-list-container'>
          < CommentList comments={this.props.comments} fetchComments={this.props.fetchComments} />
        </div>
        <div className='comments-input-container'>
          <form onSubmit={this.handleSubmit}>
            <input className="comment-input" type="text" placeholder="Enter Message" onChange={this.update} value={this.state.content}/>
            <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} className="comment-submit-button"/>
            </button>
          </form>
        </div>
      </div>
    )
  }
}
