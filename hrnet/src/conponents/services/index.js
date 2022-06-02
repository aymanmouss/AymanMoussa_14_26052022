// variables for sorting type
let order = "ASD";

// creating a new sorted list and seted to data

const dataSorting = (tableData, employeesData) => {
  if (order === "ASD") {
    const asd = [...employeesData].sort((a, b) =>
      a[tableData]?.toUpperCase() > b[tableData]?.toUpperCase() ? 1 : -1
    );
    order = "DSC";
    return asd;
  }
  if (order === "DSC") {
    const dsc = [...employeesData].sort((a, b) =>
      a[tableData]?.toUpperCase() < b[tableData]?.toUpperCase() ? 1 : -1
    );
    order = "ASD";
    return dsc;
  }
};
// fister function
const filter = (data, search) => {
  return data?.filter((val) => {
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
const iconswitch = (
  order,
  setOrder,
  seticon,
  thData,
  setData,
  employeesData
) => {
  if (order === "") {
    setOrder("DSC");
    seticon(<i className='fa-solid fa-arrow-down-short-wide'></i>);
    setData(dataSorting(thData, employeesData));
  } else if (order === "DSC") {
    setOrder("ASD");
    seticon(<i className='fa-solid fa-arrow-up-short-wide'></i>);
    setData(dataSorting(thData, employeesData));
  } else {
    seticon(<i className='fa-solid fa-sort'></i>);
    setOrder("");
    setData(employeesData);
  }
};

const resetIcon = (
  setFistNameIcon,
  setLastNameIcon,
  setStartDateIcon,
  setDepartementIcon,
  setDateOfBirthIcon,
  setStreetIcon,
  setCityIcon,
  setStateIcon,
  setZipCodeIcon
) => {
  setFistNameIcon(<i className='fa-solid fa-sort'></i>);
  setLastNameIcon(<i className='fa-solid fa-sort'></i>);
  setStartDateIcon(<i className='fa-solid fa-sort'></i>);
  setDepartementIcon(<i className='fa-solid fa-sort'></i>);
  setDateOfBirthIcon(<i className='fa-solid fa-sort'></i>);
  setStreetIcon(<i className='fa-solid fa-sort'></i>);
  setCityIcon(<i className='fa-solid fa-sort'></i>);
  setStateIcon(<i className='fa-solid fa-sort'></i>);
  setZipCodeIcon(<i className='fa-solid fa-sort'></i>);
};

const service = {
  dataSorting,
  filter,
  iconswitch,
  resetIcon,
};
export default service;
