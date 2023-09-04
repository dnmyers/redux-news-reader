import { ReactPropTypes } from "react";

export default function Comment({ comment }) {
    const { id, text } = comment;

    return (
        <li key={id} className="comment-container">
            <span>{text}</span>
        </li>
    );
}

Comment.propTypes = {
    comment: ReactPropTypes.shape({
        id: ReactPropTypes.number.isRequired,
        text: ReactPropTypes.string.isRequired,
    }).isRequired,
};