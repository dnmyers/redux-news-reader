/* eslint-disable react/prop-types */
export default function Comment({ comment }) {
    console.log("🚀 ~ file: Comment.jsx:3 ~ Comment ~ comment:", comment)
    const { id, text } = comment;
    console.log("🚀 ~ file: Comment.jsx:5 ~ Comment ~ text:", text)
    console.log("🚀 ~ file: Comment.jsx:5 ~ Comment ~ id:", id)
    console.log("🚀 ~ file: Comment.jsx:5 ~ Comment ~ comment:", comment)

    return (
        <li key={id} className="comment-container">
            <span>{text}</span>
        </li>
    );
}