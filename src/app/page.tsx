// Indicamos que este componente se ejecutará en el lado del cliente (navegador)
"use client";

  import Image from "next/image";
  // Importamos el hook useState de React para manejar el estado del componente
  import { useState } from "react";
  // Importamos la biblioteca axios para realizar solicitudes HTTP a la API de OMDB
  import axios from "axios";
  import SearchBar from "../../components/SearchBar";
  import MovieList from "../../components/MovieList";
  import Pagination from "../../components/Pagination";
  import Footer from "../../components/Footer";

  export default function Home() {
    // Estado para almacenar la lista de películas encontradas
    const [movies, setMovies] = useState<
      { Title: string; Year: string; Poster: string }[]
    >([]);
    // Estado para almacenar la consulta de búsqueda actual
    const [query, setQuery] = useState('');
      // Estado para almacenar la página actual de resultados
    const [page, setPage] = useState(1);
    // Estado para almacenar el total de resultados encontrados
    const [totalResults, setTotalResults] = useState(0);

    // Función para realizar la búsqueda de películas
    const handleSearch = async (searchQuery: string, pageNumber = 1) => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${searchQuery}&page=${pageNumber}&apikey=9d6ccc69`
        );
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
          setTotalResults(parseInt(response.data.totalResults));
        } else {
          setMovies([]);
          setTotalResults(0);
        }
      } catch (error) {
        // Muestro un mensaje de error si ocurre un problema con la solicitud
        console.error("Error fetching movies:", error);
      }
    };
    // Función para cambiar de página
    const handlePageChange = (newPage: number) => {
      setPage(newPage);
      handleSearch(query, newPage);
    };
    // Función para enviar la consulta de búsqueda
    const handleSearchSubmit = (searchQuery: string) => {
      setQuery(searchQuery);
      setPage(1);
      handleSearch(searchQuery, 1);
    };
    //la interfaz de usuario
    return (
      <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
        <div className="flex items-center mb-4">
          <Image src="/icono.png" width={50} height={50} alt="logo" />
          <h1 className="text-3xl font-bold ml-4">Movie Search</h1>
        </div>
        <SearchBar onSearch={handleSearchSubmit} />
        <div className="px-56">
        <MovieList movies={movies} />
        <br />
        </div>
        <br/>
        <Pagination
          currentPage={page}
          
          totalResults={totalResults}
          resultsPerPage={10}
          onPageChange={handlePageChange}
        />
        <br/> 
        <Footer/>
      </div>
    );
  }

