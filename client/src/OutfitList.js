import React from "react";
import OutfitCard from "./OutfitCard";

export default function OutfitList({ outfits, weatherData, onAddHanger, user }) {
  // console.log(outfits)
  return (
    
    <ul className="flex flex-wrap justify-center">
      {outfits.map((outfit) => {
       
        let splitTemp = outfit.temp_range.split("-")
        let min_temp = parseInt(splitTemp[0])
        let max_temp = parseInt(splitTemp[1])
        
  
  if (Math.round(weatherData.temperature) >= min_temp && Math.round(weatherData.temperature) <= max_temp) {
        return (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
            onAddHanger={onAddHanger}
            user={user}
          />
        );
        } 
        
      })}
    </ul>
  );
}



