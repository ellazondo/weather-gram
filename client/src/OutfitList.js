import React from "react";
import OutfitCard from "./OutfitCard";

export default function OutfitList({ outfits, weatherData, onAddHanger, user }) {
  console.log(outfits)
  return (
    
    <ul className="cards">
      {outfits.map((outfit) => {

        // console.log(weatherData.temperature)
        console.log('Outfit List', outfit)
        //*****UNCOMMENT BELOW IN ORDER TO FILTER OUTFITS BY TEMPERATURE 
        // if (Math.round(weatherData.temperature) === outfit.temp) {
        //USE THIS FOR TEMP RANGE
// if (outfit.temp_range.match(/^\d+-\d+$/) && Math.round(weatherData.temperature) >= outfit.min_temp && Math.round(weatherData.temperature) <= outfit.max_temp) {
        return (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
            onAddHanger={onAddHanger}
            user={user}
          />
        );
        // }
        
      })}
    </ul>
  );
}



