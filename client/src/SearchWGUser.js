import React from "react";

export default function SearchWGUser({ setSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Users:</label>
      <input
        type="string"
        id="search"
        placeholder="Search by username..."
        // value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

