import { useState } from "react";
import PopUpFeedCloset from "./PopUpFeedCloset";
import UpdateOutfitInCloset from "./UpdateOutfitInCloset";

export default function ClosetCard({ user, onUpdateOutfitInCloset, setHangersInCloset, hangerInCloset }) {
 
// console.log('hanger in closet', hangerInCloset)
const { name, outfit_img } = hangerInCloset.outfit || {};
const [model, setModel] = useState(false)

  return (
    user.id === hangerInCloset.user_id ? 
    (<li className="w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 p-4" >
                 {model ? (
            <PopUpFeedCloset
            user={user}
            hangerInCloset={hangerInCloset}
            onUpdateOutfitInCloset={onUpdateOutfitInCloset}
            setHangersInCloset={setHangersInCloset}
             />
              )
            :
            null}
      <img className="w-full rounded-lg" src={outfit_img} alt={name} onClick={() => setModel(!model)} />
      
    </li> 
    ) :
    (null)
  );
}





