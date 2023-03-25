import React, { useState } from "react";

export default function NewOutfitForm({ onAddOutfit }) {
  const [newOutfitName, setNewOutfitName] = useState("");
  const [newOutfitImage, setNewOutfitImage] = useState("");
  const [newOutfitTemp, setNewOutfitTemp] = useState("");
  const [newOutfitRain, setNewOutfitRain] = useState("");
  const [newOutfitOccasion, setNewOutfitOccasion] = useState("");
  const [newOutfitCity, setNewOutfitCity] = useState("");
  const [newOutfitCreatedBy, setNewOutfitCreatedBy] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/outfits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newOutfitName,
        temp: newOutfitTemp,
        rain: newOutfitRain,
        occasion: newOutfitOccasion,
        city: newOutfitCity,
        outfit_img: newOutfitImage,
        created_by: newOutfitCreatedBy,

        

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
          type="number"
          name="temp"
          step="0.01"
          placeholder="Temperature °C"
          value={newOutfitTemp}
          onChange={(e) => setNewOutfitTemp(parseFloat(e.target.value))}
        />
        </div>

        <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="rain"
          placeholder="true or false"
          value={newOutfitRain}
          onChange={(e) => setNewOutfitRain(e.target.value)}
        />
</div>

        <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="occasion"
          placeholder="Occasion exp: streetwear"
          value={newOutfitOccasion}
          onChange={(e) => setNewOutfitOccasion(e.target.value)}
        />
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
        
        <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
        <input
          type="text"
          name="created_by"
          placeholder="your username"
          value={newOutfitCreatedBy}
          onChange={(e) => setNewOutfitCreatedBy(e.target.value)}
        />
        </div>

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
      </div>


      </div>
    </div>
  );
}