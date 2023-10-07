// специально для вас Игорь чтобы не запутались :)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронное действие для получения списка постов
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://dummyjson.com/posts');
  return response.data;
});

// Асинхронное действие для создания поста
export const createPost = createAsyncThunk('posts/createPost', async (post) => {
    const response = await axios.post('https://dummyjson.com/products/add', post);
    return response.data;
  });

// Асинхронное действие для удаления поста
export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  await axios.delete(`https://dummyjson.com/posts/${postId}`);
  return postId;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        return state.filter(post => post.id !== action.payload);
      });
  }
});

export default postsSlice.reducer;
