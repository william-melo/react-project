import { NavLink } from "react-router-dom";
export function LinkFavorites() {
  return (
    <div className="container">
      <NavLink to="/favorites">
        <button className="div-favorite-link">
          Ver Imagenes Favoritas ❤️
        </button>
      </NavLink>
    </div>
  );
}
