import React, { useState } from "react";

export default function NewOutfitForm({ onAddOutfit, user }) {
  const [newOutfitName, setNewOutfitName] = useState("");
  const [newOutfitImage, setNewOutfitImage] = useState("");
  const [newOutfitTemp, setNewOutfitTemp] = useState("");
  const [newOutfitRain, setNewOutfitRain] = useState("");
  const [newOutfitOccasion, setNewOutfitOccasion] = useState("");
  const [newOutfitCity, setNewOutfitCity] = useState("");
  // const [newOutfitCreatedBy, setNewOutfitCreatedBy] = useState("");
  console.log(newOutfitTemp)

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/outfits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newOutfitName,
        temp_range: newOutfitTemp,
        rain: newOutfitRain,
        occasion: newOutfitOccasion,
        city: newOutfitCity,
        outfit_img: newOutfitImage,
        created_by: user.username,

        

      }),
    })
      .then((r) => r.json())
      .then((newOutfit) => onAddOutfit(newOutfit));
  }

  return (
        <div className="fixed top-0 left-0 right-0 w-full container mx-auto px-6 py-18 md:py-30 bg-white rounded-4xl ">
      <div className="max-w-md mx-auto text-center">
      
      <h2 className="font-heading font-semibold text-5xl mb-10">New Outfit</h2>
      
      <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="max-w-md xl:max-w-3xl mx-auto">

      <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Outfit name"
          value={newOutfitName}
          onChange={(e) => setNewOutfitName(e.target.value)}
        />
        </div>

<div className="relative group px-4 pt-2.5 pb-2 mb-4 bg-gray-50 rounded-lg">
      <input
          type="string"
          name="temp"
          step="0.01"
          placeholder="temp °C, exp: 25-30"
          value={newOutfitTemp}
          min="0"
          max="35"
          onChange={(e) => setNewOutfitTemp((e.target.value))}
        />
        </div>

        {/* <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="rain"
          placeholder="true or false"
          value={newOutfitRain}
          onChange={(e) => setNewOutfitRain(e.target.value)}
        />
</div> */}

<div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
       <select
        id="search"
        // value={searchRain}
        onChange={(e) => setNewOutfitRain(e.target.value)}
      >
        <option value="">Rain?</option>
        <option value="true">True</option>
        <option value="false">False</option>
        </select>
        </div>

        {/* <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="occasion"
          placeholder="Occasion exp: streetwear"
          value={newOutfitOccasion}
          onChange={(e) => setNewOutfitOccasion(e.target.value)}
        />
        </div> */}

      <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <select
        id="search"
        onChange={(e) => setNewOutfitOccasion(e.target.value)}
      >
        <option value="">Occasion</option>
        <option value="streetwear">Streetwear</option>
        <option value="sporty">Sporty</option>
        <option value="brunch">Brunch</option>
        <option value="dinner_party">Dinner Party</option>
        <option value="going_out">Going Out</option>
        <option value="festival">Festival</option>
        <option value="wedding">Wedding</option>

        </select>
        </div>
        
        
        <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="city"
          placeholder="city"
          value={newOutfitCity}
          onChange={(e) => setNewOutfitCity(e.target.value)}
        />
        </div>
        
        
        <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="image"
          placeholder="Image URL .jpg"
          value={newOutfitImage}
          onChange={(e) => setNewOutfitImage(e.target.value)}
        />
        </div>
        
        {/* <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="created_by"
          placeholder="your username"
          value={newOutfitCreatedBy}
          onChange={(e) => setNewOutfitCreatedBy(e.target.value)}
        />
        </div> */}

                      <div className="text-center">
                <a className="group relative inline-block h-16 mb-8 w-full md:w-44 bg-blueGray-900 rounded" >
                  <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                    <div className="flex h-full w-full items-center justify-center bg-blue-500 border-2 border-blueGray-900 rounded">
        <button type="submit" className="text-base font-semibold uppercase">Add Outfit</button>
                           </div>
                  </div>
                </a>
              </div>

        </div>
      </form>

       <button class="inline-flex items-center font-base font-semibold px-10 mt-10">
                <span class="mr-2 text-white">exit</span>
                <div class="relative transition duration-500 animate-pulse text-white">
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
              </button>

      </div>


      </div>
    </div>
  );
}