import UpdateOutfitInCloset from "./UpdateOutfitInCloset";
import { useState } from 'react';

export default function PopUpFeedCloset ({ user, hangerInCloset, onUpdateOutfitInCloset, setHangersInCloset }) {
    const [model, setModel] = useState(false)
    // console.log('popup', outfit.outfit_img)
    // console.log('popup user', user)
    const { name, temp, rain, occasion, city, created_by } = hangerInCloset.outfit || {};

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
    <>
 {/* <img className="w-full rounded-lg" src={outfit_img} alt={name} /> */}
            {model ? (
                <div className="relative">
            <UpdateOutfitInCloset 
            id = {hangerInCloset.outfit?.id}
            onUpdateOutfitInCloset={onUpdateOutfitInCloset}
            hangerInCloset={hangerInCloset} />
            </div>
              )
            :
            null}

      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °C</p>
      <p>Raining?{rain}</p>
      <p>City:{city}</p>
      <p>Occasion: {occasion}</p>
      <p>Created by: {created_by}</p>
      {user.username === hangerInCloset.outfit.created_by ?
      (
      <>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setModel(!model)} >Update Outfit</button>
      
      </>
      )
      :
      (null)}
{/* BELOW IS EXAMPLE FROM POPUPOUTFIT    */}
{/* <div>
<img src={outfit.outfit_img} />
<ul>
<li> Temperature: {outfit.temp} </li>
<li> Occasion: {outfit.occasion} </li>
<li> Raining: {outfit.rain} </li>
<li> Created by: {outfit.created_by} </li>
</ul>
<button onClick={handleSave}> Save to closet</button> 
</div> */}

{/* BELOW WOUULD NOT ALLOW ME TO HANDLE SAVE */}
{/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
</>

 
);
}