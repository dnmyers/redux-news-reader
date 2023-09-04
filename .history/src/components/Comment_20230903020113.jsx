/* eslint-disable react/prop-types */
export default function Comment({ id, text }) {s
    return (
        <li key={id} className="comment-container">
            <span>{text}</span>
        </li>
    );
}