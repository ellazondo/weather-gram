import React, { useState } from "react";
import OutfitListAll from "./OutfitListAll";
import Search from "./Search";


export default function OutfitInspo({ outfits, onAddHanger, user }) {
  const [searchTerm, setSearchTerm] = useState("");


  const displayedOutfits = outfits.filter((outfit) => {
    return outfit.temp.toString().includes(searchTerm.toString());
  });
  console.log('searched temperature', searchTerm)

  return (
    <main>
      <h1 className="mb-5 hero d-flex d-none d-md-block">Outfit Inspo</h1>
      <Search setSearchTerm={setSearchTerm} />
      <OutfitListAll
        outfits={displayedOutfits}
        onAddHanger={onAddHanger}
        user={user}
      />
    </main>
  );
}