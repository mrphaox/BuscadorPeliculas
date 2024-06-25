"use client";

import React, { useState } from "react";
// Importo el icono de búsqueda de Font Awesome
import { FaSearch } from "react-icons/fa";

// Defino la interfaz de props para el componente SearchBar
interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // Creo un estado para almacenar la consulta de búsqueda
  const [query, setQuery] = useState("");

  // Creo una función para manejar el envío del formulario de búsqueda
  const handleSubmit = (e: React.FormEvent) => {
    // Evito que el formulario se envíe por defecto
    e.preventDefault();
    onSearch(query);
  };
  // la barra de búsqueda
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center mt-6 space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar una película..."
          className="w-full sm:w-64 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <FaSearch className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
