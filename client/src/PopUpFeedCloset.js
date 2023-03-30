import UpdateOutfitInCloset from "./UpdateOutfitInCloset";
import { useState } from 'react';

export default function PopUpFeedCloset ({ user, hangerInCloset, onUpdateOutfitInCloset, setHangersInCloset }) {
    const [model, setModel] = useState(false)
    // const [secondModel, setSecondModel] = useState(false)
    // console.log('popup', outfit.outfit_img)
    
    const { name, temp_range, rain, occasion, city, created_by } = hangerInCloset.outfit || {};

      function handleDelete () {
      // console.log(id)
      fetch(`http://localhost:3000/hangers/${hangerInCloset.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setHangersInCloset(hangersInCloset => hangersInCloset.filter(hanger=> hanger.id !== hangerInCloset.id))
    })
  }

  function handleDeleteOutfit () {
    console.log('hanger.outfit.id', hangerInCloset.outfit.id)
          fetch(`http://localhost:3000/outfits/${hangerInCloset.outfit.id}`, {
      method: 'DELETE'
    })
    // .then(() => {
    //   setHangersInCloset(hangersInCloset => hangersInCloset.filter(hanger=> hanger.id !== hangerInCloset.id))
    // })
  }
    
    
// const [minTemp, maxTemp] = outfit.temp_range.split('-');
return (
  
    
 <>
            {model ? (
                <div className="relative">
            <UpdateOutfitInCloset 
            id = {hangerInCloset.outfit?.id}
            onUpdateOutfitInCloset={onUpdateOutfitInCloset}
            hangerInCloset={hangerInCloset} />
            <div>
            <button className="absolute visible text-black" onClick={() => setModel(false)}>Exit</button>
            </div>
            </div>
              )
            :
            null}

            {/* {secondModel ? (
                <div className="relative">
            <OutfitBreakdown
            //  id={hangerInCloset.outfit?.id}
            hangerInCloset={hangerInCloset}
            />
            </div>
              )
            :
            null} */}
           


  <div class="max-w-sm lg:max-w-none mx-auto py-5 px-8 bg-white rounded-2xl">
          
    <h4 class="text-2xl font-medium mb-2">@{created_by}</h4>
    <p class="max-w-2xs pr-10">{name}</p>
 		<p class="max-w-2xs pr-10">{occasion}</p>
    <p class="max-w-2xs pr-10">{city}</p>
    {rain ?
      (<p class="max-w-2xs pr-10"> Raining</p>)
      :
      (<p class="max-w-2xs pr-10">No Rain</p>)}
    <p class="max-w-2xs pr-10">{temp_range}°C</p>
             <button class="left-0 h-10 w-50 mt-1 bg-blueGray-900 rounded">
            <div class=" h-full transition duration-300">
              <div onClick={handleDelete} class=" items-center bg-white border-2 border-blueGray-900 rounded">
              <span class="text-base uppercase">Closet DELETE</span>
             </div>
            </div>
          </button>
                    {/* <button class="h-5 w-30 bg-blueGray-900 rounded">
            <div class="top-0 left-0 w-full h-full transition duration-300">
              <div onClick={() => setSecondModel(!model)} class=" items-center bg-white border-2 border-blueGray-900 rounded">
              <span class="text-base uppercase">Shop this look</span>
             </div>
            </div>
          </button> */}

    {user.username === hangerInCloset.outfit.created_by ?
      (
      <>
          <button class="h-10 w-50 bg-blueGray-900 rounded">
            <div class="top-0 left-0 w-full h-full transition duration-300">
              <div onClick={handleDeleteOutfit} class=" items-center bg-white border-2 border-blueGray-900 rounded">
              <span class="text-base uppercase">Permanent Delete</span>
             </div>
            </div>
          </button>
          <button class=" h-10 w-50 bg-blueGray-900 rounded">
            <div class="left-0 h-full transition duration-300 mt-5">
              <div onClick={() => setModel(!model)} class=" items-center bg-white border-2 border-blueGray-900 rounded">
              <span class="text-base font-semibold uppercase">Update Outfit</span>
             </div>
            </div>
          </button>
      
      </>)
      :
      (null)}

        </div>
        </>

    

      




 



 
);
}