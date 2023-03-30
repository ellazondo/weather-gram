import { useState } from 'react';
import OutfitBreakdown from './OutfitBreakdown';

export default function PopUpFeedOutfit ({ outfit, user, onAddHanger }) {
  
  // const [showShopLink, setShowShopLink] = useState(false);

    function handleSave (e) {
    console.log({
        outfit_id: outfit.id, 
        user_id: user.id
      })
    e.preventDefault();
    fetch("http://localhost:3000/hangers" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        outfit_id: outfit.id, 
        user_id: user.id
      })
    })
  .then(r=> r.json())
  .then((newHanger) => onAddHanger(newHanger))

  console.log('user.username', user.username) 
    
  }

  //   function handleClick() {
  //   setShowShopLink(true);
  // }
    

return (
    <>
    <div>
<img src={outfit.outfit_img} />
<ul>
<li> Temperature Range: {outfit.temp_range}°C </li>
<li> Occasion: {outfit.occasion} </li>
<li> 
  {outfit.rain ?
      (<p class="max-w-2xs pr-10"> Raining</p>)
      :
      (<p class="max-w-2xs pr-10">No Rain</p>)}
</li>
<li> Created by: {outfit.created_by} </li>
</ul>
<button onClick={handleSave}> Save to closet</button> 

    {/* <button 
      className="h-5 w-30 bg-blueGray-900 rounded"
      onClick={handleClick}
    >
      <div className="items-center bg-white border-2 border-blueGray-900 rounded">
        
      
      {showShopLink ? <OutfitBreakdown /> : <p className="text-base uppercase">Shop this look </p>}
    </div>
    </button> */}


</div>
{/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
</>

 
);
}



