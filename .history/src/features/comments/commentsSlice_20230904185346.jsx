import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

export const loadCommentsForArticleId = createAsyncThunk(
    'comments/loadCommentsForArticleId',
    async (articleId) => {
        const response = await fetch(`api/articles/${articleId}/comments`);
        const json = await response.json();
        return json;
    }
);

export const postCommentForArticleId = createAsyncThunk(
    'comments/postCommentForArticleId',
    async ({ articleId, comment }) => {
        const requestBody = JSON.stringify({ comment });
        const response = await fetch(`api/articles/${articleId}/comments`, {
            method: 'POST',
            body: requestBody,
        });
        const json = await response.json();
        console.log("🚀 ~ file: commentsSlice.jsx:26 ~ json:", json)
        return json;
    }
)

export const commentsSlice = createSlice                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ({
    name: 'comments',
    initialState: {
        byArticleId: {},
        isLoadingComments: false,
        failedToLoadComments: false,
        createCommentIsPending: false,
        failedToCreateComment: false,
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
                    [action.payload.articleId]: action.payload.comments,
                };
            })
            .addCase(loadCommentsForArticleId.rejected, (state) => {
                state.isLoadingComments = false;
                state.failedToLoadComments = true;
            })
            .addCase(postCommentForArticleId.pending, (state) => {
                state.createCommentIsPending = true;
                state.failedToCreateComment = false;
            })
            .addCase(postCommentForArticleId.fulfilled, (state, action) => {
                state.createCommentIsPending = false;
                state.failedToCreateComment = false;

                const { articleId, comment } = action.payload;
                console.log("🚀 ~ file: commentsSlice.jsx:64 ~ .addCase ~ action.payload:", action.payload)
                console.log("🚀 ~ file: commentsSlice.jsx:64 ~ .addCase ~ articleId:", articleId)
                console.log("🚀 ~ file: commentsSlice.jsx:64 ~ .addCase ~ comment:", comment)
                const existingComments = state.byArticleId[articleId] || [];
                console.log("🚀 ~ file: commentsSlice.jsx:66 ~ .addCase ~ existingComments:", existingComments)
                state.byArticleId = {
                    ...state.byArticleId,
                    [articleId]: [...existingComments, comment],
                };
            })
            .addCase(postCommentForArticleId.rejected, (state) => {
                state.createCommentIsPending = false;
                state.failedToCreateComment = true;
            })
        }
    }
);

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
