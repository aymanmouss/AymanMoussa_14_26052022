// variables for sorting type
let order = "ASD";

// initialState of icones
const iconn = {
  city: <i class='fa-solid fa-sort'></i>,
  dateOfBirth: <i class='fa-solid fa-sort'></i>,
  department: <i class='fa-solid fa-sort'></i>,
  firstName: <i class='fa-solid fa-sort'></i>,
  lastName: <i class='fa-solid fa-sort'></i>,
  startDate: <i class='fa-solid fa-sort'></i>,
  state: <i class='fa-solid fa-sort'></i>,
  street: <i class='fa-solid fa-sort'></i>,
  zipCode: <i class='fa-solid fa-sort'></i>,
};

// creating a new sorted list and seted to data

const dataSorting = (tableData, employeesData) => {
  if (order === "ASD") {
    const asd = [...employeesData].sort((a, b) =>
      a[tableData].toLowerCase() > b[tableData] ? 1 : -1
    );
    order = "DSC";
    return asd;
  }
  if (order === "DSC") {
    const dsc = [...employeesData].sort((a, b) =>
      a[tableData].toLowerCase() < b[tableData] ? 1 : -1
    );
    order = "ASD";
    return dsc;
  }
};
// fister function
const filter = (data, search) => {
  return data.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.firstName.toLowerCase().includes(search.toLowerCase()) ||
      val.lastName.toLowerCase().includes(search.toLowerCase()) ||
      val.startDate.includes(search.toLowerCase()) ||
      val.department.toLowerCase().includes(search.toLowerCase()) ||
      val.dateOfBirth.includes(search.toLowerCase()) ||
      val.street.toLowerCase().includes(search.toLowerCase()) ||
      val.city.toLowerCase().includes(search.toLowerCase()) ||
      val.state.toLowerCase().includes(search.toLowerCase()) ||
      val.zipCode.includes(search.toLowerCase())
    ) {
      return val;
    }
  });
};
const service = {
  dataSorting,
  filter,
};
export default service;
