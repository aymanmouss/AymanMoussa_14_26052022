import { createSlice } from "@reduxjs/toolkit";
const employeesDatatest = [
  {
    city: "Albuquerque",
    dateOfBirth: "2022-05-04",
    department: "MARKETING",
    firstName: "Ayman",
    lastName: "Moussa",
    startDate: "2022-05-07",
    state: "AMERICAN SAMOA",
    street: "2105 Vista Oeste St",
    zipCode: "87120",
  },
  {
    city: "New Orleans",
    dateOfBirth: "1994-09-01",
    department: "SALES",
    firstName: "James",
    lastName: "Butt",
    startDate: "2010-02-01",
    state: "LA",
    street: "6649 N Blue Gum St",
    zipCode: "70116",
  },
  {
    city: "Brighton",
    dateOfBirth: "1984-06-17",
    department: "ENGINEERING",
    firstName: "Josephine",
    lastName: "Darakjy",
    startDate: "1990-02-02",
    state: "MISSOURI",
    street: "4 B Blue Ridge Blvd",
    zipCode: "48116",
  },
  {
    city: "Chagrin Falls",
    dateOfBirth: "1966-09-08",
    department: "HUMAN RESOURCE",
    firstName: "Kris",
    lastName: "Marrier",
    startDate: "2010-10-29",
    state: "SAMOA",
    street: "228 Runamuck Pl2808",
    zipCode: "21224",
  },
  {
    city: "Laredo",
    dateOfBirth: "2022-05-04",
    department: "Legal",
    firstName: "Cammy",
    lastName: "Albares",
    startDate: "2022-05-07",
    state: "AMERICAN SAMOA",
    street: "56 E Morehead St",
    zipCode: "87120",
  },
  {
    city: "Santa Clara",
    dateOfBirth: "1957-07-10",
    department: "MARKETING",
    firstName: "Veronika",
    lastName: "Inouye",
    startDate: "1979-06-19",
    state: "CALIFORNIA",
    street: "6 Greenleaf Ave",
    zipCode: "95111",
  },
  {
    city: "Monroe Township",
    dateOfBirth: "1948-08-28",
    department: "Legal",
    firstName: "Sabra",
    lastName: "Uyetake",
    startDate: "2020-02-20",
    state: "Middlesex",
    street: "762 S Main St",
    zipCode: "53711",
  },
  {
    city: "Anchorage",
    dateOfBirth: "1995-01-01",
    department: "MARKETING",
    firstName: "Danica",
    lastName: "Bruschke",
    startDate: "2015-12-25",
    state: "AMERICAN SAMOA",
    street: "68556 Central Hwy",
    zipCode: "99501",
  },
];
export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employeesData: employeesDatatest,
    successMessage: false,
    dateOfStart: "",
    dateOfBirth: "",
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employeesData.unshift(action.payload);
    },
    employeesAdded: (state) => {
      state.successMessage = !state.successMessage;
    },
    dateOfStart: (state, action) => {
      state.dateOfStart = action.payload;
    },
    dateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
  },
});
export const { addEmployee, employeesAdded, dateOfStart, dateOfBirth } =
  employeesSlice.actions;

export default employeesSlice.reducer;
