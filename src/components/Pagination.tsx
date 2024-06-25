"use client"; // Opcional, pero puede añadir por consistencia

import React from "react";
// Defino la interfaz de props para el componente Pagination
interface PaginationProps {
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}
// Defino el componente Pagination como una función de React
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalResults,
  resultsPerPage,
  onPageChange,
}) => {
    // Calculo el total de páginas necesarias
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Anterior
      </button>
      <br />
      <span>
      <span className="px-4 py-2 mx-1">
        Página {currentPage} de {totalPages}
      </span>
      <br />
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
