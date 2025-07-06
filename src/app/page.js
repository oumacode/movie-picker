"use client"; 

import "./global.css";
import { useState, useEffect } from "react";

const TMDB_API_KEY = "6ffc5512ebd3834ef72265e25f3454b4"; 
const TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(TMDB_API_URL);
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    getMovies();
  }, []);

  const pickMovie = () => {
    if (movies.length > 0) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    }
  };

  return (
    <div className="app">
      <h1>Movie Picker</h1>

        {!movie && (
        <div>
          <div className="film-strip">
            <div className="film-holes"></div>
              <div className="movies-container">
                {movies.map((m) => (
                  <img
                    key={m.id}
                    src={`${IMAGE_BASE_URL}${m.poster_path}`}
                    alt={m.title}
                  />
                ))}
          </div>
          <div className="film-holes bottom"></div>
          </div>
          <div className="button-container">
            <button onClick={pickMovie}>Pick a movie to watch</button>
          </div>
          </div>
          
        )}


            {movie && (
            <div className="selected-movie">
              <h2>{movie.title}</h2>
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="button-container">
                <button onClick={() => setMovie(null)}>Go Back</button> {/* ← New button */}
                <button onClick={pickMovie}>Pick Another Movie</button>
              </div>
              
            </div>
          )}
  
    </div>
  );
}
