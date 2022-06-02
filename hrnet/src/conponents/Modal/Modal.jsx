import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addEmployee,
  openModal,
  employeesAdded,
} from "../../redux/employeesSlice";
import DropDownMenu from "../Module/DropDownMenu";
import { dataState } from "../Table/dataStates";
import "./style.css";
const Modal = () => {
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
  // Error form Meassage
  const [errorMessage, setErrorMessage] = useState(false);
  const handlError = () => {
    setErrorMessage(false);
  };
  if (modaleState) return null;
  return (
    <div className='modal'>
      {errorMessage && (
        <div className='errorMessage'>
          <p>
            At least the firstName and lastName must be filled out when creating
            an employee.
          </p>
          <i onClick={handlError} class='fa-solid fa-xmark errx'></i>
        </div>
      )}
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
              {/* dropdown menu Module*/}
              <DropDownMenu
                data={dataState}
                inputeDepartments={setInputState}
              />
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
              {/* dropdown menu Module*/}
              <DropDownMenu
                data={department}
                inputeDepartments={setInputDepartment}
              />
            </div>
            <div className='employeeInfo multi'>
              <input
                type='button'
                name='submit'
                value='SAVE'
                className='inputBtnSubmit'
                onClick={(e) => {
                  e.preventDefault();
                  if (firstName === "" || lastName === "") {
                    setErrorMessage(true);
                  } else {
                    dispatch(
                      addEmployee({
                        firstName: firstName,
                        lastName: lastName,
                        dateOfBirth: dateOfBirth.format("DD/MM/YYYY"),
                        startDate: startDate,
                        street: street,
                        city: city,
                        state: inputeState,
                        zipCode: zipCode,
                        department: inputeDepartment,
                      })
                    );
                    setFirstName("");
                    setLastName("");
                    setDateOfBirth("");
                    setStartDate("");
                    setStreet("");
                    setCity("");
                    setInputState("--- State ---");
                    setZipCode("");
                    setInputDepartment("--- Department ---");
                    dispatch(openModal());
                    setErrorMessage(false);
                    dispatch(employeesAdded());
                  }
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
