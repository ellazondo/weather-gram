import { useState } from "react";

function Search({ setSearchTerm, setSearchCity, setSearchUsername, setSearchRain, setSearchOccasion }) {

  
  return (
    <div className="">
      <label htmlFor="search">Search Outfits:</label>
      <input
      className="bg-blueGray-50 rounded-lg"
        type="number"
        id="search"
        placeholder="Search a temperature..."
        // value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        <input
        type="text"
        id="search"
        placeholder="Search a city..."
        // value={searchTerm}
        onChange={(e) => setSearchCity(e.target.value)}
      />
        <input
        type="text"
        id="search"
        placeholder="Search a username..."
        // value={searchTerm}
        onChange={(e) => setSearchUsername(e.target.value)}
      />
        {/* <input
        type="text"
        id="search"
        placeholder="Search an occasion..."
        // value={searchTerm}
        onChange={(e) => setSearchOccasion(e.target.value)}
      /> */}

        <select
        id="search"
        onChange={(e) => setSearchOccasion(e.target.value)}
      >
        <option value="">Occasion</option>
        <option value="streetwear">Streetwear</option>
        <option value="sporty">Sporty</option>
        <option value="brunch">Brunch</option>
        <option value="dinner_party">Dinner Party</option>
        <option value="going_out">Going Out</option>
        <option value="festival">Festival</option>
        <option value="wedding">Wedding</option>

        </select>

        <select
        id="search"
        // value={searchRain}
        onChange={(e) => setSearchRain(e.target.value)}
      >
        <option value="">Rain?</option>
        <option value="true">True</option>
        <option value="false">False</option>
        </select>
    </div>
  );
}

export default Search;