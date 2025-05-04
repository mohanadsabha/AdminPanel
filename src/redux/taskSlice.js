import { createSlice } from "@reduxjs/toolkit";

const taskSLice = createSlice({
  name: "task-slice",
  initialState: { tasks: [] },
  reducers: {
    index(state, action) {
      state.tasks = action.payload;
    },
    store(state, action) {
      state.tasks = [action.payload, ...state.tasks];
    },
    update(state, action) {
      state.tasks = state.tasks.map((el) =>
        el._id === action.payload._id ? action.payload : el
      );
    },
    delete(state, action) {
      state.tasks = state.tasks.filter((el) => el._id !== action.payload._id);
    },
  },
});

export const taskActions = taskSLice.actions;
export const taskReducer = taskSLice.reducer;
