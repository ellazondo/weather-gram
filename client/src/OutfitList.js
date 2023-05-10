import React from "react";
import OutfitCard from "./OutfitCard";

export default function OutfitList({ outfits, weatherData, onAddHanger, user }) {
  const appropriateOutfits = outfits.filter(outfit => {
    let splitTemp = outfit.temp_range.split("-")
    let min_temp = parseInt(splitTemp[0])
    let max_temp = parseInt(splitTemp[1])    
    return (Math.round(weatherData.temperature) >= min_temp && Math.round(weatherData.temperature) <= max_temp)
  })

  console.log(appropriateOutfits[0])
  console.log(appropriateOutfits[1])
  console.log(appropriateOutfits[2])
  console.log(appropriateOutfits[3])
  
  
  
  return (
    
    <ul className="flex flex-wrap justify-center">
      {outfits.map((outfit, index) => {
        
        let splitTemp = outfit.temp_range.split("-")
        let min_temp = parseInt(splitTemp[0])
        let max_temp = parseInt(splitTemp[1])
        
        
        if (Math.round(weatherData.temperature) >= min_temp && Math.round(weatherData.temperature) <= max_temp) {
          console.log('seeing which outfit', outfits[index].outfit_img)
        return (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
            onAddHanger={onAddHanger}
            user={user}
          />
        );
        } 
        
      }
      
      )}
    </ul>
  );
}





