import React from "react";
import "./style.css";
const Table = () => {
  return (
    <div className='table'>
      <div className='table-header'>
        <div className='entries'>
          <label htmlFor='entries-show'>Show</label>
          <select name='entries-show' className='entriesShow'>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
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
              Statet <i class='fa-solid fa-sort'></i>
            </th>
            <th>
              Zip Code <i class='fa-solid fa-sort'></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label='First-Name'>Ayman</td>
            <td data-label='Last-Name'>Moussa</td>
            <td data-label='Start-Date'>12/04/2015</td>
            <td data-label='Departement'>06</td>
            <td data-label='Date-of-Birth'>04/05/1987</td>
            <td data-label='Street'>Boulevar de Riquier</td>
            <td data-label='City'>Nice</td>
            <td data-label='Statet'>Alpes-Maritimes</td>
            <td data-label='Zip-Code'>06300</td>
          </tr>
          <tr>
            <td data-label='First-Name'>Ayman</td>
            <td data-label='Last-Name'>Moussa</td>
            <td data-label='Start-Date'>12/04/2015</td>
            <td data-label='Departement'>06</td>
            <td data-label='Date-of-Birth'>04/05/1987</td>
            <td data-label='Street'>Boulevar de Riquier</td>
            <td data-label='City'>Nice</td>
            <td data-label='Statet'>Alpes-Maritimes</td>
            <td data-label='Zip-Code'>06300</td>
          </tr>
          <tr>
            <td data-label='First-Name'>Ayman</td>
            <td data-label='Last-Name'>Moussa</td>
            <td data-label='Start-Date'>12/04/2015</td>
            <td data-label='Departement'>06</td>
            <td data-label='Date-of-Birth'>04/05/1987</td>
            <td data-label='Street'>Boulevar de Riquier</td>
            <td data-label='City'>Nice</td>
            <td data-label='Statet'>Alpes-Maritimes</td>
            <td data-label='Zip-Code'>06300</td>
          </tr>
        </tbody>
      </table>
      <div className='tableFooter'>
        <p>Showing 1 to 2 of 2 entries</p>
        <div class='pagination'>
          <p>&laquo;</p>
          <p>1</p>
          <p>&raquo;</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
