// components/Movie.tsx
import React from "react";

// propiedades de peliculas.
interface MovieProps {
  title: string;
  year: string;
  poster: string;
}

const Movie: React.FC<MovieProps> = ({ title, year, poster }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-gray-300 rounded">
      <img
        src={poster}
        alt={`${title} Poster`}
        className="w-48 h-auto rounded"
      />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{year}</p>
    </div>
  );
};

export default Movie;
