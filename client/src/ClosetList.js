import React from "react";
import ClosetCard from "./ClosetCard";

export default function ClosetList({ user, hangersInCloset, setHangersInCloset, onUpdateOutfitInCloset }) {
  
  
  return (
    
    <ul className="flex flex-wrap -mx-4 -mb-4">
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

