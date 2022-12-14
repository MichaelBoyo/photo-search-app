import React from "react";
import styles from "./search.module.css";
const Search = ({ getSearchTerm }) => {
  const [search, setSearch] = React.useState("");
  const inputRef = React.useRef();
  const submit = (e) => {
    e.preventDefault();
    
    if (search.trim() !== "") {
      getSearchTerm(search);
    }
    setSearch("");
  };
  React.useEffect(() => {
    inputRef.current.focus();
  },[])

  return (
    <form className={styles.search} onSubmit={submit}>
      <input
        value={search}
        type="search"
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button>search</button>
    </form>
  );
};

export default Search;
