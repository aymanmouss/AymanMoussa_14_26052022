import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/employeesSlice";
import Pagination from "../pagination";
import "./style.css";

const Table = () => {
  const dispatch = useDispatch();
  const employeesData = useSelector((state) => state.employees.employeesData);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(employeesData);
  }, [employeesData]);
  // useEffect(() => {
  //   console.log(employeesData);
  //   window.localStorage.setItem(
  //     "HRNET_EMPLOYEE",
  //     JSON.stringify(employeesData)
  //   );
  // }, employeesData);
  // const employee_local_data = JSON.parse(
  //   window.localStorage.getItem("HRNET_EMPLOYEE")
  // );

  // pagination Variables
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(2);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstEmployee = indexOfLastPage - dataPerPage;
  // new List with pagination
  const currentEmployees = employeesData.slice(
    indexOfFirstEmployee,
    indexOfLastPage
  );
  // sorting variables
  const [order, setOrder] = useState("ASD");
  const [sorted, setSorted] = useState(null);
  // const sorting = (tableData) => {
  //   if (order === "ASD") {
  //     sorted(

  //     );
  //     setOrder("DSC");
  //     console.log(currentEmployees);
  //   }
  //   if (order === "DSC") {
  //     setSorted(
  //       [currentEmployees].sort((a, b) => (a.tableData < b.tableData ? 1 : -1))
  //     );
  //   }
  //   setOrder("ASD");
  // };
  // change pages with pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='table'>
      <div className='table-header'>
        <div className='entries'>
          <label htmlFor='entries-show'>Show</label>
          <select
            name='entries-show'
            className='entriesShow'
            onChange={(e) => {
              setCurrentPage(1);
              setDataPerPage(e.target.value);
            }}
          >
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={50}>100</option>
          </select>
          <p>entries</p>
        </div>
        <div className='dataSearsh'>
          <label htmlFor='search'>Search:</label>
          <input
            className='dataSearshInput'
            name='search'
            type='search'
          ></input>
        </div>
      </div>
      <table className='dataTable'>
        <thead>
          <tr>
            <th>
              First Name <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              Last Name <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              Start Date <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              Departement <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              Date of Birth <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              Street <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              City <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              State <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              Zip Code <i class='fa-solid fa-sort'></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => {
            return (
              <tr key={index}>
                <td data-label='First-Name'>{employee.firstName}</td>
                <td data-label='Last-Name'>{employee.lastName}</td>
                <td data-label='Start-Date'>{employee.startDate}</td>
                <td data-label='Departement'>{employee.department}</td>
                <td data-label='Date-of-Birth'>{employee.dateOfBirth}</td>
                <td data-label='Street'>{employee.street}</td>
                <td data-label='City'>{employee.city}</td>
                <td data-label='Statet'>{employee.state}</td>
                <td data-label='Zip-Code'>{employee.zipCode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='tableFooter'>
        <p>
          Showing {currentPage} to{" "}
          {Math.ceil(employeesData.length / dataPerPage)} of
          {Math.ceil(employeesData.length / dataPerPage)} entries
        </p>
        <div class='pagination'>
          <Pagination
            dataPerPage={dataPerPage}
            totalemployees={employeesData.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div className='addData'>
        <button className='addDataBtn' onClick={() => dispatch(openModal())}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Table;
