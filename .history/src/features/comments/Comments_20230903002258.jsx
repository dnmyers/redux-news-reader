import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    loadCommentsForArticleId,
    selectComments,
    isLoadingComments,
} from '../comments/commentsSlice';
import { selectCurrentArticle } from '../currentArticle/currentArticleSlice';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';

const Comments = () => {
    const dispatch = useDispatch();
    const article = useSelector(selectCurrentArticle);
    // Declare additional selected data here.
    const comments = useSelector(selectComments);
    const commentsAreLoading = useSelector(isLoadingComments);

    // Dispatch loadCommentsForArticleId with useEffect here.
    useEffect(() => {
        if (article) {
            console.log("🚀 ~ file: Comments.jsx:23 ~ useEffect ~ article:", article)
            dispatch(loadCommentsForArticleId(article.id));
            console.log("🚀 ~ file: Comments.jsx:25 ~ useEffect ~ article.id:", article.id)
            console.log("🚀 ~ file: Comments.jsx:25 ~ useEffect ~ article:", article)
        }
    }, [dispatch, article])

    const commentsForArticleId = article === undefined ? [] : comments[article.id];

    if (commentsAreLoading) return <div>Loading Comments</div>;
    if (!article) return null;

    return (
        <div className='comments-container'>
            <h3 className='comments-title'>Comments</h3>
            <CommentList comments={commentsForArticleId} />
            <CommentForm articleId={article.id} />
        </div>
    );
};

export default Comments;
