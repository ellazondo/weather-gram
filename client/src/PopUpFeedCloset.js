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

<>


        <div class="max-w-sm lg:max-w-none mx-auto py-5 px-8 bg-white rounded-2xl">
          
          <h4 class="text-2xl font-medium mb-2">@{created_by}</h4>
<p class="max-w-2xs pr-10">{name}</p>
 		<p class="max-w-2xs pr-10">{occasion}</p>
<p class="max-w-2xs pr-10">{city}</p>
{rain ?
(<p class="max-w-2xs pr-10"> Raining</p>)
:
(<p class="max-w-2xs pr-10">No Rain</p>)}
<p class="max-w-2xs pr-10">{temp}°C</p>
{user.username === hangerInCloset.outfit.created_by ?
      (
      <>
          <a class="group relative inline-block h-16 w-full bg-blueGray-900 rounded">
            <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
              <div onClick={handleDelete} class="flex h-full w-full items-center justify-center bg-white border-2 border-blueGray-900 rounded">
 <span class="text-base font-semibold uppercase">Delete</span>
             </div>
            </div>
          </a>
          <a class="group relative inline-block h-16 w-full bg-blueGray-900 rounded">
            <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
              <div onClick={() => setModel(!model)} class="flex h-full w-full items-center justify-center bg-white border-2 border-blueGray-900 rounded">
<span class="text-base font-semibold uppercase">Update Outfit</span>
             </div>
            </div>
          </a>
      
      </>
      )
      :
      (null)}

        </div>

      
</>



      {/* <h4>{name}</h4>
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
      (null)} */}

</>

 
);
}