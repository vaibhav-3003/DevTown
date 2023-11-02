import React from 'react'
import styled from 'styled-components';

const Pagination = ({ productsPerPage, totalProducts, paginate,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  

  return (
    <div>
      <PaginationList>
        <li>
          <PaginationButton
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </PaginationButton>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <PaginationButton
              active={number === currentPage}
              onClick={() => paginate(number)}
            >
              {number}
            </PaginationButton>
          </li>
        ))}
        <li>
          <PaginationButton
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </PaginationButton>
        </li>
      </PaginationList>
    </div>
  );
};
const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 10px 0;
`;

const PaginationButton = styled.button`
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-family: "Clash Display", sans-serif;
  background-color: #f9af42;
  color: #303030;
  border: ${(props) =>
    props.active ? "2px solid #F8F7E5" : "1px solid #f7bd68"};

  &:disabled {
    opacity: 85%;
    cursor: not-allowed;
  }
`;

export default Pagination
