import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesPage } from "./components/FavoritesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/favorites"  element={<FavoritesPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
