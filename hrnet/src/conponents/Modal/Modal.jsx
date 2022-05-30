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
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  // modal display from redux state
  const dispatch = useDispatch();
  const modaleState = useSelector((state) => state.employees.modal);

  const department = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resource",
    "Legal",
  ];
  const handlOnChange = (e) => {
    setFirstName(e.target.value);
  };
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
                onChange={handlOnChange}
              />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='Last-Name'>Last Name</label>
              <input
                value={lastName}
                type='text'
                name='last-name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='date-of-birth'>Date of Birth</label>
              <input
                value={dateOfBirth}
                type='date'
                name='date-of-birth'
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
          </div>
          <div className='employeeInfo'>
            <label htmlFor='start-date'>Start Date</label>
            <input
              value={startDate}
              type='date'
              name='start-date'
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div class='formGroup'>
            <div className='employeeInfo multi'>
              <label htmlFor='street'>Street</label>
              <input
                value={street}
                type='text'
                name='street'
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='city'>City</label>
              <input
                value={city}
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
                onClick={(e) => {
                  setDisplayState(!displayState);
                }}
              />
              {displayState && (
                <ul className='optionList'>
                  {dataState.map((data, index) => {
                    return (
                      <li
                        className='clicked'
                        onClick={(e) => {
                          setInputState(e.target.innerText);
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
                      state: inputeState,
                      zipCode: zipCode,
                      department: inputeDepartment,
                    })
                  );
                  dispatch(openModal());
                  setFirstName("");
                  setLastName("");
                  setDateOfBirth("");
                  setStartDate("");
                  setStreet("");
                  setCity("");
                  setInputState("--- State ---");
                  setZipCode("");
                  setInputDepartment("--- Department ---");
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
