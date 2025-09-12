import MovieCard from "../components/Card";
import SearchBar from "../components/SearchBar";
import { CardGrid } from "../components/Card/styles";

export default function Home() {
  const movies = [
    { id: Math.random(), title: "John Wick", release: "2020" },
    { id: Math.random(), title: "Matrix", release: "1999" },
    { id: Math.random(), title: "Akira", release: "2000" },
    { id: Math.random(), title: "Terminator", release: "1997" },
  ];

  return (
    <div className="home">
      <SearchBar />
      <CardGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </CardGrid>
    </div>
  );
}
