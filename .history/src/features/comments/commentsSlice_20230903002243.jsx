import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

export const loadCommentsForArticleId = createAsyncThunk(
    'comments/loadCommentsForArticleId',
    async (articleId) => {
        const response = await fetch(`api/articles/${articleId}/comments`);
        const json = await response.json();
        console.log("🚀 ~ file: commentsSlice.jsx:11 ~ json:", json)
        return json;
    }
);

// Create postCommentForArticleId here.

export const commentsSlice = createSlice                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ({
    name: 'comments',
    initialState: {
        byArticleId: {},
        isLoadingComments: false,
        failedToLoadComments: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCommentsForArticleId.pending, (state) => {
                state.isLoadingComments = true;
                state.failedToLoadComments = false;
            })
            .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
                state.isLoadingComments = false;
                state.failedToLoadComments = false;
                state.byArticleId = {
                    ...state.byArticleId,
                    [action.payload.articleId]: action.payload.comments,
                }
            })
            .addCase(loadCommentsForArticleId.rejected, (state) => {
                state.isLoadingComments = false;
                state.failedToLoadComments = true;
            })
            .addDefaultCase((state, action) => state);
        }
    }
);

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
