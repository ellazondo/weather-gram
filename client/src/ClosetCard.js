import React from "react";
import UpdateOutfitInCloset from './UpdateOutfitInCloset';

export default function ClosetCard({ onUpdateOutfitInCloset, handleDelete, outfitInCloset }) {
//   console.log('outfit in closet', outfitInCloset.id)
const { name, temp, outfit_img } = outfitInCloset.outfit;

  //  function handleUpdateOutfitInCloset(updatedOutfitInCloset) {
  //       const updatedOutfitInClosetArray = outfitInCloset.map((plant) => {
  //           if (plant.id === updatedPlant.id) {
  //               return updatedPlant;
  //               } else {
  //                   return plant;
  //               }
  //           });
  //   setOutfitInCloset(updatedOutfitInClosetArray);
  // }
 


  return (
    <li className="card">
      <img src={outfit_img} alt={name} />
      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °F</p>
      <button onClick={() => {
        handleDelete(outfitInCloset.id)
      }} >Delete</button>
      <UpdateOutfitInCloset 
      onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
    </li>
  );
}