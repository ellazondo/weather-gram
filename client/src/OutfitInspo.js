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
    if (searchRain === false || searchRain === "") {
      // if searchRain is false or not set, include all outfits
      return outfit.city.toLowerCase().includes(searchCity.toLowerCase()) 
        && outfit.created_by.toLowerCase().includes(searchUsername.toLowerCase()) 
        && (searchOccasion === "" || outfit.occasion.toLowerCase() === searchOccasion.toLowerCase())
        && searchTermInt >= parseInt(minTemp)
        && searchTermInt <= parseInt(maxTemp);
    } else {
      // if searchRain is true, include only outfits that match the rain condition
      return outfit.city.toLowerCase().includes(searchCity.toLowerCase()) 
        && outfit.created_by.toLowerCase().includes(searchUsername.toLowerCase()) 
        && (searchOccasion === "" || outfit.occasion.toLowerCase() === searchOccasion.toLowerCase())
        && outfit.rain === true
        && searchTermInt <= parseInt(maxTemp)
        && searchTermInt >= parseInt(minTemp);
    }
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

  // const displayedOutfits = outfits.filter((outfit) => {
  //   console.log(outfit)
  //   return (outfit.temp.split("-")[0] <= parseInt(searchTerm) && outfit.temp.split("-")[1] >= parseInt(searchTerm))
  //   && outfit.city.toLowerCase().includes(searchCity.toLowerCase()) 
  //   && outfit.created_by.toLowerCase().includes(searchUsername.toLowerCase()) 
  //   && (searchOccasion === "" || outfit.occasion.toLowerCase() === searchOccasion.toLowerCase()) 
  //   && (searchRain === "" || outfit.rain === (searchRain === "true"));
    // outfit.temp.toString().includes(searchTerm.toString()) 
  // });

//   useEffect(() => {
//   const filteredOutfits = outfits.filter((outfit) => {
//   const [minTemp, maxTemp] = outfit.temp_range.split('-');
//   const searchTermInt = parseInt(searchTerm);
//   return searchTermInt >= parseInt(minTemp) 
//     && searchTermInt <= parseInt(maxTemp)
//     && outfit.city.toLowerCase().includes(searchCity.toLowerCase()) 
//     && outfit.created_by.toLowerCase().includes(searchUsername.toLowerCase()) 
//     && (searchOccasion === "" || outfit.occasion.toLowerCase() === searchOccasion.toLowerCase()) 
//     && (searchRain === "" || outfit.rain === (searchRain === "true"));
  
//   });

//   setDisplayedOutfits(filteredOutfits);
// }, [searchTerm, searchCity, searchUsername, searchOccasion, searchRain]);

//   useEffect(() => {
//     setDisplayedOutfits([...outfits]);
//   }, [outfits]);


