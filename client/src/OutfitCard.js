import React from "react";

export default function OutfitCard({ outfit }) {
  // const { name, outfit_img, temp } = outfit

  console.log('this should be working', outfit)

  function handleSave () {
    console.log("save worked")
  }

console.log(outfit.outfit_img)
  return (
    <li className="card">
      <img src={outfit.outfit_img} alt={outfit.name} />
      <h4>{outfit.name}</h4>
      <p>Suggested Temperature: {outfit.temp} °F</p>
    <button onClick={handleSave}>Save to closet</button>
    </li>
    
    
  );
}