import { useFavorite } from "../hooks/useFavorite.js";
import { NoLikeHeartIcon, LikedHeartIcon } from "./Icons.jsx";
import "./Pictures.css";

export function Pictures({ pictures }) {
  const { favoritePictures, addToFavorites, removeFromFavorites } =
    useFavorite();

  const checkFavoritePicture = (picture) => {
    return favoritePictures.some((item) => item.id === picture.id);
  };


  return (
    
    <ul className="pictures">
      {pictures?.map((picture) => {
        const isFavoritePicture = checkFavoritePicture(picture);
        return (
          <li key={picture.id} className="picture">
            <div>
              <img
                draggable= "false"
                className="image"
                src={picture.urls.small}
                alt={`Photo by ${picture.user.name}`}
              />

              <label htmlFor={picture.id} className="icon">
                {isFavoritePicture ? <LikedHeartIcon /> : <NoLikeHeartIcon />}
              </label>

              <input
                type="checkbox"
                id={picture.id}
                hidden
                onClick={() => {
                  isFavoritePicture
                    ? removeFromFavorites(picture)
                    : addToFavorites(picture);
                }}
              />
            </div>
          </li>
        );
      })}
    </ul>
    
  );
}
