import "./App.css";
import { createPortal } from "react-dom";
import Search from "./components/search/Search";
import { useState, useEffect } from "react";
import ImageList from "./components/ImageList";
import { unsplash } from "./api/unsplash";
import Pagination from "@mui/material/Pagination";

function App() {
  const [search, setSearch] = useState("love");
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const getSearchTerm = (term) => {
    setSearch(term);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await unsplash.get(
        `/search/photos?query=${search}&per_page=34&page=${page}`
      );
      setImages(result.data.results);
      setPages(result.data.total_pages);
    };
    fetchPhotos();
  }, [search, page]);
  return (
    <div className="App">
      {createPortal(
        <Search getSearchTerm={getSearchTerm} />,
        document.getElementById("search")
      )}

      <ImageList images={images} />
      <Pagination
        style={{
          marginLeft: "40%",
          marginBottom: "10px",
        }}
        color="secondary"
        count={pages}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
