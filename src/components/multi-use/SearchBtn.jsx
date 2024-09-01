import React from "react";

function SearchBtn({ searchValue, handleChange }) {
  return (
    <>
      <input
        className="searchInput"
        type="text"
        autoComplete="off"
        name="text"
        placeholder="Search Here"
        value={searchValue}
        onChange={handleChange}
      />
    </>
  );
}

export default SearchBtn;
