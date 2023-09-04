/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';

// * Reducers
import articlePreviewsReducer from '../features/articlePreviews/articlePreviewsSlice';
import currentArticleReducer from '../features/currentArticle/currentArticleSlice';
import commentsReducer from '../features/comments/commentsSlice';


const store = configureStore({
    reducer: {
        articlePreviews: articlePreviewsReducer,
        currentArticle: currentArticleReducer,
        comments: commentsReducer
    },
});

export default store;