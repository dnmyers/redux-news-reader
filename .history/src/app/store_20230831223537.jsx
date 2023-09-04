/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';

// * Reducers
import articlePreviewReducer from '../features/articlePreviews/articlePreviewsSlice';
import currentArticleReducer from '../features/currentArticle/currentArticleSlice';
import commentsReducer from '../features/comments/commentsSlice';


export default configureStore({
    reducer: {
        articlePreviews: articlePreviewsReducer,
        currentArticle: currentArticleReducer,
        comments: commentsReducer
    },
});