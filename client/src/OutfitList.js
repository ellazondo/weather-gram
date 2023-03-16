import React from "react";
import OutfitCard from "./OutfitCard";

export default function OutfitList({ outfits, weatherData, onAddHanger, user }) {
  return (
    <ul className="cards">
      {outfits.map((outfit) => {

        // console.log(weatherData.temperature)
        // console.log('Outfit List', outfit.outfit_img)
        //*****UNCOMMENT BELOW IN ORDER TO FILTER OUTFITS BY TEMPERATURE 
        // if (Math.round(weatherData.temperature) === outfit.temp) {
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

