import React from "react";
import ClosetCard from "./ClosetCard";

export default function ClosetList({ user, hangersInCloset, handleDelete, onUpdateOutfitInCloset }) {
  
  
  return (
    
    <ul className="cards">
      {hangersInCloset?.map((hangerInCloset) => {
        
        
    
        return (
        
          <ClosetCard
            user={user}
            key={hangerInCloset.id}
            hangerInCloset={hangerInCloset}
            handleDelete={handleDelete}
            onUpdateOutfitInCloset={onUpdateOutfitInCloset}
          />
         
          
        );
        
      })
      }
    </ul>
  );
}

