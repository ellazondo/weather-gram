import React from "react";
import UpdateOutfitInCloset from './UpdateOutfitInCloset';

export default function ClosetCard({ onUpdateOutfitInCloset, handleDelete, outfitInCloset }) {
  //this console.log is working but i keep getting an error 
  //saying that line 22 is incorrect
  // console.log('outfit in closet', outfitInCloset.outfit.id)
const { name, temp, outfit_img } = outfitInCloset.outfit || {};

 


  return (
    <li className="card">
      <img className="h-60 transform group-hover:-translate-y-5 transition ease-in-out duration-1000 mb-4 rounded-4xl object-cover" src={outfit_img} alt={name} />
      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °F</p>
      <button onClick={() => {
        handleDelete(outfitInCloset.id)
      }} >Delete</button>
      <UpdateOutfitInCloset 
      id = {outfitInCloset.outfit?.id}
      onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
    </li>
  );
}

