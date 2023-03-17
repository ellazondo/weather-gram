import React from "react";

export default function ClosetCard({ outfitInCloset, handleDelete }) {
//   console.log('outfit in closet', outfitInCloset.id)
const { name, temp, outfit_img } = outfitInCloset.outfit;
 


  return (
    <li className="card">
      <img src={outfit_img} alt={name} />
      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °F</p>
      <button onClick={() => {
        handleDelete(outfitInCloset.id)
      }} >Delete</button>
    </li>
  );
}