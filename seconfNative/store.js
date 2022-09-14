import { createSlice } from "@reduxjs/toolkit";

export const store = createSlice({
  name: "store",
  initialState: {
    items: [],
  },
  reducers: {
    getTasks: (state, action) => {
      state.items = action.payload;
    },
    addNewTask: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter((task) => task._id !== action.payload);
    },

    updateTask: (state, action) => {
      state.items = state.items.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    },
  },
});
export const { getTasks, addNewTask, deleteTask, updateTask } = store.actions;
export default store.reducer;
