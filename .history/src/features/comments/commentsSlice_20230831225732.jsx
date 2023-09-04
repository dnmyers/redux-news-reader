import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

const loadCommentsForArticleId = createAsyncThunk(
    'comments/loadCommentsForArticleId',
    async (articleId) => {
        const response = await fetch(`api/articles/${articleId}/comments`);
        const json = await response.json();
        return json;
    }
);

// Create postCommentForArticleId here.

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        byArticleId: {
            [articleId]: [
                [comments]
            ]
        },
    },
    // Add extraReducers here.
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
