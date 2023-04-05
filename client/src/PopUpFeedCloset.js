import UpdateOutfitInCloset from "./UpdateOutfitInCloset";
import { useState } from 'react';

export default function PopUpFeedCloset ({ user, hangerInCloset, onUpdateOutfitInCloset, setHangersInCloset }) {
    const [model, setModel] = useState(false)
    // const [secondModel, setSecondModel] = useState(false)
    console.log('popup closet', hangerInCloset)
    
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
           


  <div className="absolute">
    <div className="py-60 px-60 bg-white rounded-2xl">
    {/* <div className="max-w-sm lg:max-w-none mx-auto py-5 px-8 bg-white rounded-2xl"> */}
          
    <h4 className="text-2xl font-medium mb-2">@{created_by}</h4>
    <p className="max-w-2xs pr-10">{name}</p>
 		<p className="max-w-2xs pr-10">{occasion}</p>
    <p className="max-w-2xs pr-10">{city}</p>
    {rain ?
      (<p className="max-w-2xs pr-10"> Raining</p>)
      :
      (<p className="max-w-2xs pr-10">No Rain</p>)}
    <p className="max-w-2xs pr-10">{temp_range}°C</p>
             <button className="left-0 h-10 w-50 mt-1 bg-blueGray-900 rounded">
            <div className=" h-full transition duration-300">
              <div onClick={handleDelete} className=" items-center bg-white border-2 border-blueGray-900 rounded">
              <span className="text-base uppercase">Closet DELETE</span>
             </div>
            </div>
          </button>
                    {/* <button className="h-5 w-30 bg-blueGray-900 rounded">
            <div className="top-0 left-0 w-full h-full transition duration-300">
              <div onClick={() => setSecondModel(!model)} className=" items-center bg-white border-2 border-blueGray-900 rounded">
              <span className="text-base uppercase">Shop this look</span>
             </div>
            </div>
          </button> */}

    {user.username === hangerInCloset.outfit.created_by ?
      (
      <>
          <button className="h-10 w-50 bg-blueGray-900 rounded">
            <div className="top-0 left-0 w-full h-full transition duration-300">
              <div onClick={handleDeleteOutfit} className=" items-center bg-white border-2 border-blueGray-900 rounded">
              <span className="text-base uppercase">Permanent Delete</span>
             </div>
            </div>
          </button>
          <button className=" h-10 w-50 bg-blueGray-900 rounded">
            <div className="left-0 h-full transition duration-300 mt-5">
              <div onClick={() => setModel(!model)} className=" items-center bg-white border-2 border-blueGray-900 rounded">
              <span className="text-base font-semibold uppercase">Update Outfit</span>
             </div>
            </div>
          </button>
          
      
      </>)
      :
      (null)}
        </div>
        </div>
        </>

    

      




 



 
);
}

