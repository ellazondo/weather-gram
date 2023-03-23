import React, { useEffect, useState } from "react";
// import NewOutfitForm from "./NewOutfitForm";
import OutfitList from "./OutfitList";
// import Search from "./Search";

export default function Fashion({ weatherData, outfits, onAddHanger, user }) {

 


  return (
    <main className="w-full">
      <OutfitList
        weatherData={weatherData}
        outfits={outfits}
        onAddHanger={onAddHanger}
        user={user}
      />
      
    </main>
  );
}