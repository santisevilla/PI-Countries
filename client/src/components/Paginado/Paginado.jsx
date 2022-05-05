import React, { useEffect } from "react";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div>
        <div>
          <ul>
            {pageNumbers?.map((number) => (
              <button key={number} onClick={() => paginado(number)}>
                {number}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
