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

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://yaktribe.games/community/media/placeholder-jpg.84782/full";

  const title = movie.title || movie.name || "Título não disponível";

  return (
    <Card>
      <MoviePoster>
        <img
          src={imageUrl}
          alt={title}
          onError={(e) => {
            e.target.src =
              "https://yaktribe.games/community/media/placeholder-jpg.84782/full";
          }}
        />
        <MovieOverlay>
          <FavoriteBtn onClick={onFavoriteClick}>🩷</FavoriteBtn>
        </MovieOverlay>
      </MoviePoster>
      <MovieInfo>
        <h3>{title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </MovieInfo>
    </Card>
  );
}
