import { useContext } from "react";
import { FavoriteContext } from "../contexts/favorite";

export function useFavorite() {
    const favorite = useContext(FavoriteContext);

    if (favorite === undefined) {
        throw new Error('useLike must be used within a LikeProvider');
    }

    return favorite;
}