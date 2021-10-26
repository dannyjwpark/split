import { connect } from "react-redux";
import { addMessage, fetchMessage } from "../../actions/comment_actions";
import Comment from "./comment";

const mapStateToProps = state => {
    return {
        comments: state.comments ? Object.values(state.comments).reverse() : [],
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: bill_id => dispatch(fetchComments(bill_id)),
        fetchComment: comment => dispatch(fetchComment(comment)),
        addComment: comment => dispatch(addComment(comment)),
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);