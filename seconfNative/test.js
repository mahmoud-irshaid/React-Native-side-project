import { createSlice } from "@reduxjs/toolkit";

export const test = createSlice({
  name: "test",
  initialState: {
    value: "mahmoud",
  },
  reducers: {
    testHandler: (state, action) => {
      state.value = "haroun";
    },
  },
});
export const { testHandler } = test.actions;
export default test.reducer;
