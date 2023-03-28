import { useState } from "react";
import PopUpFeedOutfit from "./PopUpFeedOutfit";

export default function OutfitCard({ outfit, onAddHanger, user }) {
  // console.log('outfitcard user', user.username)
  const [model, setModel] = useState(false)




  return (
    <li className="card">
              <div class="w-full 2xl:w-1/2 px-4 mb-20 2xl:mb-0">
            <a class="group block max-w-md mx-auto" onClick={() => setModel(!model)}> 
            {model ? (
            <PopUpFeedOutfit
            onAddHanger={onAddHanger}
            user={user}
            outfit={outfit} /> )
            :
            null
            }
              

              <img class="h-64 sm:h-80 lg:h-112 transform group-hover:-translate-y-5 transition ease-in-out duration-1000 w-full mb-4 mt-10 rounded-4xl object-cover" 
                src={outfit.outfit_img} 
                alt={outfit.name}  />
            </a>
          </div>
          </li>

    
    
  );
}

  

    





