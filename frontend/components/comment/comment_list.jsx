import React from 'react';

class CommentList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        if(!this.props.comments) return null;

        return (
            <ul className="comment-list">
                {this.props.comments.map((comment) => (
                    <li className="comment-item">
                        <div className="comment-item-user">
                            {comment.user}
                        </div>
                        <div className="comment-item-comment">
                            {comment.content}
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}
