import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, employeesAdded } from "../../redux/employeesSlice";
import Pagination from "../pagination";
import service from "../services";
import "./style.css";

const Table = () => {
  const employeesAddedState = useSelector(
    (state) => state.employees.successMessage
  );

  const dispatch = useDispatch();
  const employeesData = useSelector((state) => state.employees.employeesData);
  useEffect(() => {
    setData(employeesData);
  }, [employeesData]);

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
  const [order, setOrder] = useState("");

  const initialStateIcons = <i className='fa-solid fa-sort'></i>;
  // icon sorting display
  const [fistNamIcon, setFistNameIcon] = useState(initialStateIcons);
  const [lastNamIcon, setLastNameIcon] = useState(initialStateIcons);
  const [startDateIcon, setStartDateIcon] = useState(initialStateIcons);
  const [departementIcon, setDepartementIcon] = useState(initialStateIcons);
  const [dateOfBirthIcon, setDateOfBirthIcon] = useState(initialStateIcons);
  const [streetIcon, setStreetIcon] = useState(initialStateIcons);
  const [cityIcon, setCityIcon] = useState(initialStateIcons);
  const [stateIcon, setStateIcon] = useState(initialStateIcons);
  const [zipCodeIcon, setZipCodeIcon] = useState(initialStateIcons);

  return (
    <div className='table'>
      {employeesAddedState && (
        <div className='modal-module'>
          <div className='successMessage'>
            <p>Employee Created!</p>
            <div class='progress progress-striped'>
              <div class='progress-bar'></div>
            </div>
          </div>
        </div>
      )}

      <h1 className='dashboard-title'>Current Employees</h1>
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
            id='search'
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
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setFistNameIcon,
                  "firstName",
                  setData,
                  employeesData
                );
              }}
            >
              First Name {fistNamIcon}
            </th>
            <th
              onClick={() => {
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setLastNameIcon,
                  "lastName",
                  setData,
                  employeesData
                );
              }}
            >
              Last Name {lastNamIcon}
            </th>
            <th
              onClick={() => {
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setStartDateIcon,
                  "startDate",
                  setData,
                  employeesData
                );
              }}
            >
              Start Date {startDateIcon}
            </th>
            <th
              onClick={() => {
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setDepartementIcon,
                  "department",
                  setData,
                  employeesData
                );
              }}
            >
              Departement {departementIcon}
            </th>
            <th
              onClick={() => {
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setDateOfBirthIcon,
                  "dateOfBirth",
                  setData,
                  employeesData
                );
              }}
            >
              Date of Birth {dateOfBirthIcon}
            </th>
            <th
              onClick={() => {
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setStreetIcon,
                  "street",
                  setData,
                  employeesData
                );
              }}
            >
              Street {streetIcon}
            </th>
            <th
              onClick={() => {
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setCityIcon,
                  "city",
                  setData,
                  employeesData
                );
              }}
            >
              City {cityIcon}
            </th>
            <th
              onClick={() => {
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setStateIcon,
                  "state",
                  setData,
                  employeesData
                );
              }}
            >
              State {stateIcon}
            </th>
            <th
              onClick={() => {
                service.resetIcon(
                  setFistNameIcon,
                  setLastNameIcon,
                  setStartDateIcon,
                  setDepartementIcon,
                  setDateOfBirthIcon,
                  setStreetIcon,
                  setCityIcon,
                  setStateIcon,
                  setZipCodeIcon
                );
                service.iconswitch(
                  order,
                  setOrder,
                  setZipCodeIcon,
                  "zipCode",
                  setData,
                  employeesData
                );
              }}
            >
              Zip Code {zipCodeIcon}
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
        <button
          className='addDataBtn'
          onClick={() => {
            dispatch(openModal());
            employeesAddedState && dispatch(employeesAdded());
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Table;
