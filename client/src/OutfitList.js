import React from "react";
import OutfitCard from "./OutfitCard";

export default function OutfitList({ outfits, weatherData, onAddHanger, user }) {
  // console.log(outfits)
  return (
    
    <ul className="flex flex-wrap">
      {outfits.map((outfit) => {

        // console.log(weatherData.temperature)
        // console.log('Outfit List', outfit)
        //*****UNCOMMENT BELOW IN ORDER TO FILTER OUTFITS BY TEMPERATURE 
        // if (Math.round(weatherData.temperature) === outfit.temp) {
        //USE THIS FOR TEMP RANGE
        console.log('temp range', outfit.temp_range)
        let splitTemp = outfit.temp_range.split("-")
        console.log('splitTemp', splitTemp)
        console.log('parse', parseInt(splitTemp[0]))
        console.log('parse2', parseInt(splitTemp[1]))
        console.log()
        let min_temp = parseInt(splitTemp[0])
        let max_temp = parseInt(splitTemp[1])
        
// if (/^\d+$/.test(outfit.temp_range) && Math.round(weatherData.temperature) === parseInt(outfit.temp_range)){
// (outfit.temp_range.match(/^\d+-\d+$/) && Math.round(weatherData.temperature) >= outfit.min_temp && Math.round(weatherData.temperature) <= outfit.max_temp) {
  
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



