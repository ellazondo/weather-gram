import React, { useState, useEffect } from "react";
import OutfitListAll from "./OutfitListAll";
import Search from "./Search";


export default function OutfitInspo({ outfits, onAddHanger, user }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [searchRain, setSearchRain] = useState(false);
  const [searchOccasion, setSearchOccasion] = useState("");
  const [displayedOutfits, setDisplayedOutfits] = useState([]);

  

useEffect(() => {
  const filteredOutfits = outfits.filter((outfit) => {
  const [minTemp, maxTemp] = outfit.temp_range.split('-');
  const searchTermInt = parseInt(searchTerm);
  return (
    (outfit.city.toLowerCase().includes(searchCity.toLowerCase()) || searchCity === "")
    && (outfit.created_by.toLowerCase().includes(searchUsername.toLowerCase()) || searchUsername === "")
    && (outfit.occasion.toLowerCase().includes(searchOccasion.toLowerCase()) || searchOccasion === "")
    && (outfit.rain === (searchRain === "true") || searchRain === "")
    && ((searchTermInt >= minTemp && searchTermInt <= maxTemp) || searchTerm === "")
  );
});


  setDisplayedOutfits(filteredOutfits);
}, [searchTerm, searchCity, searchUsername, searchOccasion, searchRain, outfits]);

useEffect(() => {
  setDisplayedOutfits(outfits);
}, [outfits]);

  return (
    <main>
      <h1 className="mb-5 hero d-flex d-none d-md-block">Outfit Inspo</h1>
      <Search 
      setSearchTerm={setSearchTerm}
      setSearchCity={setSearchCity}
      setSearchUsername={setSearchUsername}
      setSearchRain={setSearchRain}
      setSearchOccasion={setSearchOccasion}
       />
      <OutfitListAll
        outfits={displayedOutfits}
        onAddHanger={onAddHanger}
        user={user}
      />
    </main>
  );
}

  