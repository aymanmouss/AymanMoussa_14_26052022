import React from "react";
import { useState } from "react";
import "./style.css";
const Modal = () => {
  const [addEmployee, setAddEmployee] = useState(false);
  if (addEmployee) return null;
  return (
    <div className='modal'>
      <div className='modal-form'>
        <i
          class='fa-solid fa-x'
          onClick={() => setAddEmployee(!addEmployee)}
        ></i>
        <h1 className='modal-title'>HRnet</h1>
        <p className='form-title'>Create Employee:</p>
        <form className='formMain'>
          <div class='formGroup'>
            <div className='employeeInfo multi'>
              <label htmlFor='first-name'>First Name</label>
              <input type='text' name='first-name' />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='Last-Name'>Last Name</label>
              <input type='text' name='last-name' />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='date-of-birth'>Date of Birth</label>
              <input type='date' name='date-of-birth' />
            </div>
          </div>
          <div className='employeeInfo'>
            <label htmlFor='start-date'>Start Date</label>
            <input type='date' name='start-date' />
          </div>
          <div class='formGroup'>
            <div className='employeeInfo multi'>
              <label htmlFor='street'>Street</label>
              <input type='text' name='street' />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='city'>City</label>
              <input type='text' name='city' />
            </div>
          </div>
          <div class='formGroup'>
            <div className='employeeInfo multi flex2'>
              <label htmlFor='state'>State</label>
              <input
                type='button'
                name='state'
                value='California'
                className='inputBtn'
              />
            </div>
            <div className='employeeInfo multi'>
              <label htmlFor='zip-code'>Zip Code</label>
              <input type='number' name='zip-code' />
            </div>
          </div>
          <div class='formGroup'>
            <div className='employeeInfo multi flex3'>
              <label htmlFor='department'>Department</label>
              <input type='button' name='department' value='Sales' />
            </div>
            <div className='employeeInfo multi'>
              <input
                type='submit'
                name='submit'
                value='SAVE'
                className='inputBtnSubmit'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
