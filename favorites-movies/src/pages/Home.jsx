import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/Card";
import SearchBar from "../components/SearchBar";
import { CardGrid } from "../components/Card/styles";
import { getPopularMovies, searchMovies } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  // Sempre que voltar para "/", recarrega populares
  useEffect(() => {
    if (location.pathname === "/") {
      const loadPopularMovies = async () => {
        try {
          setLoading(true);
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);
        } catch (err) {
          console.error(err);
          setError("Failed to load movies...");
        } finally {
          setLoading(false);
        }
      };
      loadPopularMovies();
    }
  }, [location]); // roda sempre que a rota mudar

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Search failed...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} loading={loading} />
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <CardGrid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </CardGrid>
      )}
    </div>
  );
}
