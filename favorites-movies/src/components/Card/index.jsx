import {
  Card,
  MoviePoster,
  FavoriteBtn,
  MovieOverlay,
  MovieInfo,
} from "./styles";

export default function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <Card>
      <MoviePoster>
        <img src={movie.url} alt={movie.title} />
        <MovieOverlay>
          <FavoriteBtn onClick={onFavoriteClick}>🩷</FavoriteBtn>
        </MovieOverlay>
      </MoviePoster>
      <MovieInfo>
        <h3>{movie.title}</h3>
        <p>{movie.release}</p>
      </MovieInfo>
    </Card>
  );
}
