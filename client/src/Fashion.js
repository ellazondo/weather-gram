import React, { useEffect, useState } from "react";
// import NewOutfitForm from "./NewOutfitForm";
import OutfitList from "./OutfitList";
// import Search from "./Search";

export default function Fashion({ weatherData, outfits, onAddHanger, user }) {
  // const [outfits, setOutfits] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3000/outfits")
  //     .then((r) => r.json())
  //     .then((OutfitsArray) => {
  //       setOutfits(OutfitsArray);
  //     });
  // }, []);

  // function onAddOutfit(newOutfit) {
  //   const updatedOutfitArray = [...outfits, newOutfit];
  //   setOutfits(updatedOutfitArray);
  // }

  // console.log('outfits', outfits)


  return (
    <main>
      <OutfitList
        weatherData={weatherData}
        outfits={outfits}
        onAddHanger={onAddHanger}
        user={user}
      />
      
    </main>
  );
}