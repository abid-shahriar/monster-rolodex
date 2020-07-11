import React from "react";
import "./searchField.styles.css";

export const SearchField = ({ placeholder, filteredMonsters }) => {
  return (
    <input
      className="searchField"
      type="search"
      placeholder={placeholder}
      onChange={filteredMonsters}
    />
  );
};
