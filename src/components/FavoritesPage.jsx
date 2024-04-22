import { NavLink } from "react-router-dom";
import { useFavorite } from "../hooks/useFavorite.js";
import { FavoritePictures } from "./FavoritePictures";
import { NoFavoriteImages } from "./NoFavoriteImages.jsx";
export function FavoritesPage() {
  const { favoritePictures } = useFavorite();

  const hasFavoritePictures = favoritePictures?.length > 0;
  return (
    <>
    <div>
        <NavLink to="/home">
            <button>Volver</button>
        </NavLink>
    </div>
    {!hasFavoritePictures && <NoFavoriteImages />}
      <FavoritePictures pictures={favoritePictures} />
    </>
  );
}
