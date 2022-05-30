import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/employeesSlice";
import Pagination from "../pagination";
import service from "../services";
import "./style.css";

const Table = () => {
  const dispatch = useDispatch();
  const employeesData = useSelector((state) => state.employees.employeesData);

  // new sorted list of employeesData
  const [data, setData] = useState(employeesData);

  // pagination Variables
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstEmployee = indexOfLastPage - dataPerPage;
  const [search, setSearch] = useState("");
  // new List with pagination ( we use the sorted data to slice the list)
  const currentEmployees = service
    .filter(data, search)
    .slice(indexOfFirstEmployee, indexOfLastPage);

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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <table className='dataTable'>
        <thead>
          <tr>
            <th
              onClick={() => {
                setData(service.dataSorting("firstName", employeesData));
              }}
            >
              First Name <i className='fa-solid fa-sort'></i>
            </th>
            <th
              onClick={() => {
                setData(service.dataSorting("lastName", employeesData));
              }}
            >
              Last Name <i className='fa-solid fa-sort'></i>
            </th>
            <th
              onClick={() => {
                setData(service.dataSorting("startDate", employeesData));
              }}
            >
              Start Date <i className='fa-solid fa-sort'></i>
            </th>
            <th
              onClick={() => {
                setData(service.dataSorting("department", employeesData));
              }}
            >
              Departement <i className='fa-solid fa-sort'></i>
            </th>
            <th
              onClick={() => {
                setData(service.dataSorting("dateOfBirth", employeesData));
              }}
            >
              Date of Birth <i className='fa-solid fa-sort'></i>
            </th>
            <th
              onClick={() => {
                setData(service.dataSorting("street", employeesData));
              }}
            >
              Street <i className='fa-solid fa-sort'></i>
            </th>
            <th
              onClick={() => {
                setData(service.dataSorting("city", employeesData));
              }}
            >
              City <i className='fa-solid fa-sort'></i>
            </th>
            <th
              onClick={() => {
                setData(service.dataSorting("state", employeesData));
              }}
            >
              State <i className='fa-solid fa-sort'></i>
            </th>
            <th
              onClick={() => {
                setData(service.dataSorting("zipCode", employeesData));
              }}
            >
              Zip Code <i className='fa-solid fa-sort'></i>
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
        <div className='pagination'>
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
