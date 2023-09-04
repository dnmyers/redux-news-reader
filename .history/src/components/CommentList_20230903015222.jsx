import Comment from "./Comment";

export default function CommentList({ comments }) {
    if(comments !== undefined) {
        console.log("🚀 ~ file: CommentList.jsx:5 ~ CommentList ~ comments:", comments)
        return (
            <ul className="comments-list">
                {
                    comments.map(comment =>
                        <Comment key={comment.id} text={comment.text} />
                    )
                }
            </ul>
        );
    }

    return null;
}