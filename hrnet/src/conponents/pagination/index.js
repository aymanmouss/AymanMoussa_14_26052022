import React from "react";
import "./style.css";
const Pagination = ({ dataPerPage, totalemployees, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalemployees / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='paginations'>
      {pageNumbers.map((number, index) => {
        return (
          <p key={number}>
            <a
              className='pagination-link'
              onClick={() => paginate(number)}
              href='!#'
            >
              {number}
            </a>
          </p>
        );
      })}
    </div>
  );
};

export default Pagination;
