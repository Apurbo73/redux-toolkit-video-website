import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosApi";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: {}
};

// creating async thunks: will work like action creator
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({ tags, id });
    return relatedVideos;
  }
);

//creating slice:
const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRelatedVideos.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.isError = true;
        state.relatedVideos = [];
      });
  }
});

export default relatedVideoSlice.reducer;
