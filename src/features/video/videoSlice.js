import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoApi";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: {}
};

// creating async thunks: will work like action creator
export const fetchVideo = createAsyncThunk("video/fetchVideo", async id => {
  const video = await getVideo(id);
  return video;
});

//creating slice:
const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchVideo.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.isError = true;
        state.video = {};
      });
  }
});

export default videoSlice.reducer;
