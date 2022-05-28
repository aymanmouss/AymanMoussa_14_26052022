import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee, openModal } from "../../redux/employeesSlice";
import { dataState } from "../Table/dataStates";
import "./style.css";
const Modal = () => {
  // dropdown menu for Department
  const [display, setDisplay] = useState("");
  // dropdown menu for State
  const [displayState, setDisplayState] = useState(false);
  // iput value for State dropdown menu
  const [inputeState, setInputState] = useState("--- State ---");
  // iput value for State dropdown menu
  const [inputeDepartment, setInputDepartment] = useState("--- Department ---");
  // form data to add emloyee
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, seStartDate] = useState("");
  const [street, seStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [departmentState, setdepartmentState] = useState("");
  // All employees infos
  const [employeesinfo, setEmployeesinfo] = useState({});
  // modal display from redux state
  const dispatch = useDispatch();
  const modaleState = useSelector((state) => state.employees.modal);
  const employeesData = useSelector((state) => state.employees.employeesData);
  const department = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resource",
    "Legal",
  ];

  if (modaleState) return null;
  return (
    <div className='modal'>
      <div className='modal-form'>
        <i class='fa-solid fa-x' onClick={() => dispatch(openModal())}></i>
        <h1 className='modal-title'>HRnet</h1>
        <p className='form-title'>Create Employee:</p>
        <form className='formMain'>
          <div class='formGroup'>
            <div className='employeeInfo multi'>
              <label htmlFor='first-name'>First Name</label>
              <input
                value={firstName}
                type='text'
                name='first-name'
                onKeyUp={(e) => {
                  setFirstName(e.target.value);
                  console.log(firstName);
                }}
              />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='Last-Name'>Last Name</label>
              <input
                type='text'
                name='last-name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='date-of-birth'>Date of Birth</label>
              <input
                type='date'
                name='date-of-birth'
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
          </div>
          <div className='employeeInfo'>
            <label htmlFor='start-date'>Start Date</label>
            <input
              type='date'
              name='start-date'
              onChange={(e) => seStartDate(e.target.value)}
            />
          </div>
          <div class='formGroup'>
            <div className='employeeInfo multi'>
              <label htmlFor='street'>Street</label>
              <input
                type='text'
                name='street'
                onChange={(e) => seStreet(e.target.value)}
              />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                name='city'
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div class='formGroup'>
            <div className='employeeInfo multi flex2 relative'>
              <label htmlFor='state'>State</label>
              <input
                type='button'
                name='state'
                value={inputeState}
                className='inputBtn'
                onClick={() => setDisplayState(!displayState)}
              />
              {displayState && (
                <ul className='optionList'>
                  {dataState.map((data, index) => {
                    return (
                      <li
                        className='clicked'
                        onClick={(e) => {
                          setInputState(e.target.innerText);
                          setState(e.target.innerText);
                          setDisplayState(!displayState);
                        }}
                      >
                        {data}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='zip-code'>Zip Code</label>
              <input
                type='number'
                name='zip-code'
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
          <div class='formGroup flexStart '>
            <div className='employeeInfo multi flex3 relative'>
              <label htmlFor='department'>Department</label>
              <input
                type='button'
                name='department'
                value={inputeDepartment}
                className='inputBtn '
                onClick={(e) => {
                  setDisplay(!display);
                }}
              />
              {display && (
                <ul className='optionList'>
                  {department.map((dep) => {
                    return (
                      <li
                        onClick={(e) => {
                          setInputDepartment(e.target.innerText);
                          setdepartmentState(e.target.innerText);
                          setDisplay(!display);
                        }}
                      >
                        {dep}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className='employeeInfo multi'>
              <input
                type='button'
                name='submit'
                value='SAVE'
                className='inputBtnSubmit'
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    addEmployee({
                      firstName: firstName,
                      lastName: lastName,
                      dateOfBirth: dateOfBirth,
                      startDate: startDate,
                      street: street,
                      city: city,
                      state: state,
                      zipCode: zipCode,
                      department: departmentState,
                    })
                  );
                  console.log(employeesData);
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
