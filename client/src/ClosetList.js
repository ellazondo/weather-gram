import React from "react";
import ClosetCard from "./OutfitCard";

export default function ClosetList({ outfitsInCloset }) {
  return (
    <ul className="cards">
      {outfitsInCloset.map((outfitInCloset) => {
        // console.log(weatherData.temperature)
        console.log('closet list', outfitInCloset)
        console.log('closet list id', outfitInCloset.id.outfit)
        // if (Math.round(weatherData.temperature) === outfit.temp) {
        return (
          <ClosetCard
            key={outfitInCloset.id}
            outfitInCloset={outfitInCloset}
          />
        );
        // }
        
      })
      }
    </ul>
  );
}