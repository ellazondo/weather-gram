import React from "react";

export default function ClosetCard({ outfitInCloset }) {
          console.log("WE ARE IN CLOSETcard")
  console.log(outfitInCloset)
const { name, temp, outfit_img } = outfitInCloset.outfit;
  console.log('Gabriella rocks.name', name);
  console.log('temp', temp);
  console.log('outfit_img', outfit_img);


  return (
    <li className="card">
      <img src={outfit_img} alt={name} />
      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °F</p>
    </li>
  );
}