import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FavoriteProvider } from "./contexts/favorite.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoriteProvider>
    <App />
  </FavoriteProvider>
);
