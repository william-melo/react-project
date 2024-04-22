import "./NoFavoriteImages.css";
import { useFavorite } from "../hooks/useFavorite";
export function NoFavoriteImages() {
  const { favoritePictures } = useFavorite();

  const hasFavoritePictures = favoritePictures?.length > 0;
  return (
    <>{!hasFavoritePictures && <p className="no-fav-images">No tienes ninguna imágen favorita.</p>}</>
  );
}
