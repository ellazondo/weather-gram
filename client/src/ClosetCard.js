import React from "react";
import UpdateOutfitInCloset from './UpdateOutfitInCloset';

export default function ClosetCard({ user, onUpdateOutfitInCloset, setHangersInCloset, hangerInCloset }) {
 
console.log('hanger in closet', hangerInCloset)
const { name, temp, outfit_img } = hangerInCloset.outfit || {};

  function handleDelete () {
      // console.log(id)
      fetch(`http://localhost:3000/hangers/${hangerInCloset.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setHangersInCloset(hangersInCloset => hangersInCloset.filter(hanger=> hanger.id !== hangerInCloset.id))
    })
  }

 


  return (
    user.id === hangerInCloset.user_id ? 
    (<li className="card">
      <img className="h-60 transform group-hover:-translate-y-5 transition ease-in-out duration-1000 mb-4 rounded-4xl object-cover" src={outfit_img} alt={name} />
      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °F</p>
      <button onClick={handleDelete}>Delete</button>
      <UpdateOutfitInCloset 
      id = {hangerInCloset.outfit?.id}
      onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
    </li> 
    ) :
    (null)
  );
}

  // return (
  //   user.id === hangerInCloset.user_id ? 
  //   (<li className="card">
  //     <img className="h-60 transform group-hover:-translate-y-5 transition ease-in-out duration-1000 mb-4 rounded-4xl object-cover" src={outfit_img} alt={name} />
  //     <h4>{name}</h4>
  //     <p>Suggested Temperature: {temp} °F</p>
  //     <button onClick={() => {
  //       handleDelete(hangerInCloset.id)
  //     }} >Delete</button>
  //     <UpdateOutfitInCloset 
  //     id = {hangerInCloset.outfit?.id}
  //     onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
  //   </li> 
  //   ) :
  //   (null)
  // );

