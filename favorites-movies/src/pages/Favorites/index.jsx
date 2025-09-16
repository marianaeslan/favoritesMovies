import { FavoritesEmpty, H2 } from "./styles";
import { CardGrid } from "../../components/Card/styles";
import { useMovieContext } from "../../contexts/MovieContext";
import MovieCard from "../../components/Card";

export default function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <>
        <H2>Your Favorites</H2>
        <CardGrid>
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </CardGrid>
      </>
    );
  }

  return (
    <>
      <FavoritesEmpty>
        <h2>No Favorite Movies Yet</h2>
        <p>Click the heart and they will appear here</p>
      </FavoritesEmpty>
    </>
  );
}
