/* eslint-disable react/prop-types */
export default function Comment({ comment }) {
    const { id, text } = comment;
    console.log("🚀 ~ file: Comment.jsx:4 ~ Comment ~ comment:", comment)

    return (
        <li key={id} className="comment-container">
            <span>{text}</span>
        </li>
    );
}