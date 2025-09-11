import MovieCard from "../components/Card";
import { useState } from "react";

export default function Home() {
  const [SearchQuery, setSeacrhQuery] = useState("");

  const movies = [
    { id: Math.random(), title: "John Wick", release: "2020" },
    { id: Math.random(), title: "Matrix", release: "1999" },
    { id: Math.random(), title: "Akira", release: "2000" },
    { id: Math.random(), title: "Terminator", release: "1997" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(SearchQuery);
    setSeacrhQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={SearchQuery}
          onChange={(e) => setSeacrhQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
