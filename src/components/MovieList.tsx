// components/MovieList.tsx
import React from 'react';
// Importo el componente Movie desde el mismo directorio
import Movie from './Movie';
// Defino la interfaz de props para el componente MovieList
interface MovieListProps {
    // La propiedad movies es un array de objetos con propiedades
  movies: { Title: string; Year: string; Poster: string }[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  // Defino el tamaño de chunk (grupo) de películas que se mostrarán juntas
  const chunkSize = 4;
    // Creo un array de chunks (grupos) de películas
  const chunkedMovies = Array(Math.ceil(movies.length / chunkSize))
    .fill(undefined)
    .map((_, index) => movies.slice(index * chunkSize, (index + 1) * chunkSize));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Películas buscadas : </h2>
      <hr style={{ borderTop: '4px solid #000' }} className="mb-4" />
      {chunkedMovies.map((chunk, index) => (
        <div key={index} className="flex flex-wrap w-full mt-4">
          {chunk.map((movie) => (
            <div key={movie.Title} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <Movie title={movie.Title} year={movie.Year} poster={movie.Poster} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
