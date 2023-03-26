import React, { useState } from "react";
import OutfitListAll from "./OutfitListAll";
import Search from "./Search";


export default function OutfitInspo({ outfits, onAddHanger, user }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [searchRain, setSearchRain] = useState(false);
  const [searchOccasion, setSearchOccasion] = useState("")



  const displayedOutfits = outfits.filter((outfit) => {
    console.log(outfit)
    return outfit.temp.toString().includes(searchTerm.toString()) 
    && outfit.city.toLowerCase().includes(searchCity.toLowerCase()) 
    && outfit.created_by.toLowerCase().includes(searchUsername.toLowerCase()) 
    && (searchOccasion === "" || outfit.occasion.toLowerCase() === searchOccasion.toLowerCase()) 
    && (searchRain === "" || outfit.rain === (searchRain === "true"));
  });
  

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