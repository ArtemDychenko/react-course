import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "../styles.css";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesRating = (movie, rating) => {
    if (rating === "All") return true;
    if (rating === "Good") return movie.rating >= 8;
    if (rating === "Ok") return movie.rating >= 5 && movie.rating < 8;
    if (rating === "Bad") return movie.rating < 5;
    return false;
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filterdMovies = movies.filter((movie) => {
    return (
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
    );
  });

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Fantasy</option>
            <option>Drama</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filterdMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isWatchlisted={watchlist.includes(movie.id)}
            toggleWatchlist={toggleWatchlist}
          />
        ))}
      </div>
    </div>
  );
}
