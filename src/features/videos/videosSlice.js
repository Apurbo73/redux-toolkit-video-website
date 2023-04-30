import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: {}
};

// creating async thunks: will work like action creator
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }) => {
    const videos = await getVideos(tags, search);
    return videos;
  }
);

//creating slice:
const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchVideos.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.isError = true;
        state.videos = [];
      });
  }
});

export default videoSlice.reducer;
