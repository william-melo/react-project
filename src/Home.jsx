import "./Home.css";
//import results from "./mocks/results.json";
import { Pictures } from "./components/Pictures.jsx";
import { Footer } from "./components/Footer.jsx";
import { FavoriteProvider } from "./contexts/favorite.jsx";
import { usePictures } from "./hooks/usePictures.js";
import { useSearch } from "./hooks/useSearch.js";
import debounce from "just-debounce-it";
import { useCallback } from "react";

function Home() {
  //const pictures = results.results

  const { search } = useSearch();
  const { getPictures, pictures } = usePictures({ search });

  const debouncedPictures = useCallback(
    debounce((search) => {
      getPictures({ search });
    }, 700)
  );

  // Header
  function Header() {
    const { search, setSearch, error } = useSearch();
    const handleSubmit = (event) => {
      event.preventDefault();
      getPictures({ search });
    };

    const handleChange = (event) => {
      const newSearch = event.target.value;
      setSearch(newSearch);
      debouncedPictures(newSearch);
    };

    return (
      <header>
        <h1>React Pictures</h1>
        <form onSubmit={handleSubmit}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Sun, dogs, sunset, beach..."
              value={search}
              name="query"
              onChange={handleChange}
            />
            <button>Search</button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
      </header>
    );
  }

  return (
    <FavoriteProvider>
      <Header />
      <Pictures pictures={pictures} />
      <Footer />
    </FavoriteProvider>
  );
}

export default Home;
