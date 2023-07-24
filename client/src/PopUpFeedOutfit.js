import { useState } from "react";
import OutfitBreakdown from "./OutfitBreakdown";

export default function PopUpFeedOutfit({
  appropriateOutfits,
  user,
  onAddHanger,
}) {
  // const [showShopLink, setShowShopLink] = useState(false);

  function handleSave(e) {
    console.log({
      outfit_id: appropriateOutfits.outfit.id,
      user_id: user.id,
    });
    e.preventDefault();
    fetch("http://localhost:3000/hangers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        outfit_id: appropriateOutfits.id,
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((newHanger) => onAddHanger(newHanger));

    console.log("user.username", user.username);
  }

  //   function handleClick() {
  //   setShowShopLink(true);
  // }

  return (
    <>
      <div>
        <img src={appropriateOutfits.outfit_img} />
        <ul>
          <li> Temperature Range: {appropriateOutfits.temp_range}°C </li>
          <li> Occasion: {appropriateOutfits.occasion} </li>
          <li>
            {appropriateOutfits.rain ? (
              <p class="max-w-2xs pr-10"> Raining</p>
            ) : (
              <p class="max-w-2xs pr-10">No Rain</p>
            )}
          </li>
          <li> Created by: {appropriateOutfits.created_by} </li>
        </ul>
        <a
          onClick={handleSave}
          class="group relative inline-block h-16 w-full sm:w-40 bg-blueGray-900 rounded cursor-pointer"
        >
          <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
            <div class="flex h-full w-full items-center justify-center bg-white border-2 border-blueGray-900 rounded">
              <span class="text-base font-semibold uppercase">
                Save to Closet
              </span>
            </div>
          </div>
        </a>

        {/* <button 
      className="h-5 w-30 bg-blueGray-900 rounded"
      onClick={handleClick}
    >
      <div className="items-center bg-white border-2 border-blueGray-900 rounded">
        
      
      {showShopLink ? <OutfitBreakdown /> : <p className="text-base uppercase">Shop this look </p>}
    </div>
    </button> */}
      </div>
      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
}
