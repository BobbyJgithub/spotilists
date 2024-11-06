// SearchBar.js
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(search);
    setSearch("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchBar}>
        <input
          type="text"
          id="search"
          name="search"
          className={styles.input}
          value={search}
          onChange={handleSearch}
          placeholder="Search for a song..."
        />
        <button type="submit" className={styles.button}>
        <i className={`fas fa-search ${styles.searchIcon}`}></i> {/* Font Awesome search icon */}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
