// Uso useReducer porque asi separo la logica de actualización de mi estado, es más facil de testear  y le da una interfaz mas clara.
export const favoriteInitialState = JSON.parse(window.localStorage.getItem('favorite')) || []

export const FAVORITE_ACTIONS = {
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES: "REMOVE_FROM_FAVORITES",
  CLEAR_FAVORITES: "CLEAR_FAVORITES",
};

// update  the local storage with each action dispatched to store
export const updateLocalStorage = state => {
  window.localStorage.setItem("favorite", JSON.stringify(state))
}

// Reducer
export const favoriteReducer = (state, action) => {
  // el action es un objeto que contiene type y payload. Type es la accion a realizar y Payload son los datos de esa acción.
  const { action: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case FAVORITE_ACTIONS.ADD_TO_FAVORITES: {
      const newFavoriteListPicturesState = structuredClone(state);
      newFavoriteListPicturesState.push(actionPayload);
      updateLocalStorage(newFavoriteListPicturesState)
      return newFavoriteListPicturesState;
    }

    case FAVORITE_ACTIONS.REMOVE_FROM_FAVORITES: {
      const { id } = actionPayload;
      const filteredFavsState = state.filter((item) => item.id !== id);
      updateLocalStorage(filteredFavsState)
      return filteredFavsState;
    }

    case FAVORITE_ACTIONS.CLEAR_FAVORITES: {
      updateLocalStorage(favoriteInitialState)
      return favoriteInitialState;
    }
  }
  return state;
};
