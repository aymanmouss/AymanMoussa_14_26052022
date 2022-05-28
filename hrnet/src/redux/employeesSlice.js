import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    modal: true,
    employeesData: [{ ff: "jj" }],
  },
  reducers: {
    openModal: (state) => {
      state.modal = !state.modal;
    },
    addEmployee: (state, action) => {
      state.employeesData.push(action.payload);
    },
  },
});
export const { openModal, addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
