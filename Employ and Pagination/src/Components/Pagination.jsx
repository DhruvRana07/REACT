import React from 'react';

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

const Pagination = ({ totalPages, handlePageChange, currentPage }) => {
  let pages = createArrayOfSize(totalPages).map((_, i) => (
    <button
      key={i}
      data-testid="page-btn"
      className={currentPage === i + 1 ? 'active' : ''}
      onClick={() => handlePageChange(i + 1)}
      disabled={currentPage === i + 1}
    >
      {i + 1}
    </button> 
  ));
  return <div className="pagination-container">{pages}</div>;
};

export default Pagination;
