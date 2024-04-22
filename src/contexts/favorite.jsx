import { createContext } from "react";
import { useFavoriteReducer } from "../hooks/useFavoriteReducer";


export const FavoriteContext = createContext();


export function FavoriteProvider({ children }) {
  // Separamos la logica y funciones de dispatch en un hook personalizado.
  const {state, addToFavorites, removeFromFavorites, clearFavorites} = useFavoriteReducer();

  return (
    <FavoriteContext.Provider
      value={{
        favoritePictures: state,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
