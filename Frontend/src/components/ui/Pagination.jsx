import React from "react";
import "../../style/pagination.css";

const Pagination = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="pagination">

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? "active-page" : ""}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

    </div>
  );
};

export default Pagination;