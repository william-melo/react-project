import { useReducer } from "react";
import { FAVORITE_ACTIONS } from "../reducers/favoriteReducer";
import { favoriteReducer, favoriteInitialState } from "../reducers/favoriteReducer";

export function useFavoriteReducer() {
  const [state, dispatch] = useReducer(favoriteReducer, favoriteInitialState);

  const addToFavorites = (picture) =>
    dispatch({ action: FAVORITE_ACTIONS.ADD_TO_FAVORITES, payload: picture });

  const removeFromFavorites = (picture) =>
    dispatch({
      action: FAVORITE_ACTIONS.REMOVE_FROM_FAVORITES,
      payload: picture,
    });

  const clearFavorites = () =>
    dispatch({
      action: FAVORITE_ACTIONS.CLEAR_FAVORITES,
    });

    return  { state, addToFavorites, removeFromFavorites, clearFavorites };
}
