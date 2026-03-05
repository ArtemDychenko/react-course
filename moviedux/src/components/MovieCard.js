import "../styles.css";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.png";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isWatchlisted}
              onChange={() => toggleWatchlist(movie.id)}
            />
            <span className="slider">
              <span className="slider-label">
                {isWatchlisted ? "In watchlist" : "Add to watchlist"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
