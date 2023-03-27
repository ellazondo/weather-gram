import { useState } from 'react';
import OutfitBreakdown from './OutfitBreakdown';

export default function PopUpFeedOutfit ({ outfit, user, onAddHanger }) {
  const [model, setModel] = useState(false)
    console.log('popup', outfit)
    // console.log('popup user', user)

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
    

return (
    <>
            {model ? (
                <div className="relative">
            <OutfitBreakdown  
            key = {outfit.id}
            outfit={outfit} />
            </div>
              )
            :
            null}
    <div>
<img src={outfit.outfit_img} />
<ul>
<li> Temperature Range: {outfit.temp_range}°C </li>
<li> Occasion: {outfit.occasion} </li>
<li> Raining: {outfit.rain} </li>
<li> Created by: {outfit.created_by} </li>
</ul>
<button onClick={handleSave}> Save to closet</button> 
<button onClick={() => setModel(!model)} >Breakdown Outfit</button>
</div>
{/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
</>

 
);
}



