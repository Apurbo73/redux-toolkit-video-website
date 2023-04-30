import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from './tagsApi';

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: {}
};

// creating async thunks: will work like action creator
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

//creating slice:
const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTags.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.isError = true;
        state.tags = [];
      });
  }
});

export default tagSlice.reducer;
