import React from "react";
import UpdateOutfitInCloset from './UpdateOutfitInCloset';

export default function ClosetCard({ user, onUpdateOutfitInCloset, handleDelete, hangerInCloset }) {
 
console.log('hanger in closet', hangerInCloset)
const { name, temp, outfit_img } = hangerInCloset.outfit || {};

 


  return (
    user.id === hangerInCloset.user_id ? 
    (<li className="card">
      <img className="h-60 transform group-hover:-translate-y-5 transition ease-in-out duration-1000 mb-4 rounded-4xl object-cover" src={outfit_img} alt={name} />
      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °F</p>
      <button onClick={() => {
        handleDelete(hangerInCloset.id)
      }} >Delete</button>
      <UpdateOutfitInCloset 
      id = {hangerInCloset.outfit?.id}
      onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
    </li> 
    ) :
    (<h1>No Hangers</h1>)
  );
}

