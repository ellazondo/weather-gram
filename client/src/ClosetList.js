import React from "react";
import ClosetCard from "./ClosetCard";

export default function ClosetList({ outfitsInCloset, handleDelete, handleUpdateOutfitInCloset }) {
  return (
    <ul className="cards">
      {outfitsInCloset?.map((outfitInCloset) => {
        
        console.log('closet list', outfitInCloset)
    
        return (
        
          <ClosetCard
            key={outfitInCloset.id}
            outfitInCloset={outfitInCloset}
            handleDelete={handleDelete}
            handleUpdateOutfitInCloset={handleUpdateOutfitInCloset}
          />
          
        );
        
      })
      }
    </ul>
  );
}