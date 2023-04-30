import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: ""
};

//no need of async thunk here:
//no server calling:

//creating slice:
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    }
  }
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;
