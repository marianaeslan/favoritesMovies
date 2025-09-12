import { FavoritesEmpty } from "./styles";

export default function Favorites() {
  return (
    <>
      <FavoritesEmpty>
        <h2>No Favorite Movies Yet</h2>
        <p>Click the heart and they will appear here</p>
      </FavoritesEmpty>
    </>
  );
}
