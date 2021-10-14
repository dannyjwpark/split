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
        fetchComments: () => dispatch(fetchComments()),
        addComment: comment => dispatch(addComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);