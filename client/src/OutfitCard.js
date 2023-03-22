import { useState } from "react";
import PopUpFeedOutfit from "./PopUpFeedOutfit";

export default function OutfitCard({ outfit, onAddHanger, user }) {
  // console.log('outfitcard user', user.username)
  const [model, setModel] = useState(false)

  
  // const { name, outfit_img, temp } = outfit


  // function handleSave (e) {
  //   console.log(outfit)
  //   console.log({
  //       outfit_id: outfit.id, 
  //       user_id: user.id
  //     })
  //   e.preventDefault();
  //   fetch("http://localhost:3000/hangers" , {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       outfit_id: outfit.id, 
  //       user_id: user.id
  //     })
  //   })
  // .then(r=> r.json())
  // .then((newHanger) => onAddHanger(newHanger))

    
    
  // }


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
              
              <h4 class="mb-8 lg:mb-4 text-3xl xs:text-4xl font-heading font-semibold group-hover:text-blueGray-700">{outfit.temp} °F</h4>
              <span class="block mb-4 text-2xs text-gray-200 font-medium">{outfit.created_by}</span>
              <img class="h-64 sm:h-80 lg:h-112 transform group-hover:-translate-y-5 transition ease-in-out duration-1000 w-full mb-4 rounded-4xl object-cover" 
                src={outfit.outfit_img} 
                alt={outfit.name}  />
              <span class="inline-flex items-center font-base font-semibold">
                <span class="mr-1">
                  {/* <button onClick={handleSave}>Save to closet</button> */}
                  </span>
                <div class="relative transition duration-500 animate-pulse">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                  </svg>
                  <div class="absolute top-0 right-0 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="absolute top-0 right-0 -mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </span>
            </a>
          </div>
          </li>

    
    
  );
}

  
      // <img src={outfit.outfit_img} alt={outfit.name} />
      // <h4>{outfit.name}</h4>
      // <p>Suggested Temperature: {outfit.temp} °F</p>
    





