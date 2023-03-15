import React from "react";

export default function OutfitCard({ outfit }) {
  const { name, outfit_img, temp } = outfit;

  // console.log('this should be working', outfit)

  function handleSave () {
    console.log("save worked")
  }


  return (
    <li className="card">
      <img src={outfit_img} alt={name} />
      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °F</p>
    <button onClick={handleSave}>Save to closet</button>
    </li>
    
  );
}