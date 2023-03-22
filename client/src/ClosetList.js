import React from "react";
import ClosetCard from "./ClosetCard";

export default function ClosetList({ user, hangersInCloset, setHangersInCloset, onUpdateOutfitInCloset }) {
  
  
  return (
    
    <ul className="cards">
      {hangersInCloset?.map((hangerInCloset) => {
        
        
    
        return (
        
          <ClosetCard
            user={user}
            key={hangerInCloset.id}
            hangerInCloset={hangerInCloset}
            setHangersInCloset={setHangersInCloset}
            onUpdateOutfitInCloset={onUpdateOutfitInCloset}
          />
         
          
        );
        
      })
      }
    </ul>
  );
}

