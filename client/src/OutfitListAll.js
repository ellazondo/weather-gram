import OutfitCard from "./OutfitCard";
import React from "react";

export default function OutfitListAll ({ outfits, onAddHanger, user }) {
    return (
        <ul className="flex flex-wrap">
      {outfits.map((outfit) => {
        return (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
            onAddHanger={onAddHanger}
            user={user}
          />
        );
        

        
      })}
    </ul>
  );

    
}