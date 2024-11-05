import React, {useState} from "react";

function SearchBar(props) {
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Search Value Submitted:", search); // Log the search value
        props.setSearchValue(search); // Use the search state value here
        setSearch(""); // Clear the search state value after submitting
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" value={search} onChange={handleSearch}/>
        <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default SearchBar;