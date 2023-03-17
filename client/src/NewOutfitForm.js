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
    <div className="new-outfit-form">
      <h2>New Outfit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Outfit name"
          value={newOutfitName}
          onChange={(e) => setNewOutfitName(e.target.value)}
        />
      <input
          type="number"
          name="temp"
          step="0.01"
          placeholder="Temperature °C"
          value={newOutfitTemp}
          onChange={(e) => setNewOutfitTemp(parseFloat(e.target.value))}
        />
        <input
          type="text"
          name="rain"
          placeholder="true or false"
          value={newOutfitRain}
          onChange={(e) => setNewOutfitRain(e.target.value)}
        />
        <input
          type="text"
          name="occasion"
          placeholder="Occasion exp: streetwear"
          value={newOutfitOccasion}
          onChange={(e) => setNewOutfitOccasion(e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          value={newOutfitCity}
          onChange={(e) => setNewOutfitCity(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL .jpg"
          value={newOutfitImage}
          onChange={(e) => setNewOutfitImage(e.target.value)}
        />
        <input
          type="text"
          name="created_by"
          placeholder="your username"
          value={newOutfitCreatedBy}
          onChange={(e) => setNewOutfitCreatedBy(e.target.value)}
        />

  
        <button type="submit">Add Outfit</button>
      </form>
    </div>
  );
}