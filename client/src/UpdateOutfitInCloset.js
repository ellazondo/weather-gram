import { useState } from 'react';

export default function UpdateOutfitInCloset ( {id, onUpdateOutfitInCloset} ) {

    // const { name, temp, rain, occasion, city, outfit_img, created_by } = outfit
    
    const [updatedOutfitInCloset, setUpdatedOutfitInCloset] = useState({
        name: '',
        temp: '',
        rain: '',
        occasion: '',
        city: '',
        outfit_img: '',
        created_by: ''
    })

    function handleUpdateOutfitInCloset(e, id) {
    e.preventDefault();
    console.log(id)
    fetch(`http://localhost:6001/hangers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedOutfitInCloset }),
    })
      .then((r) => r.json())
      .then((updatedOutfitInCloset) => {
        onUpdateOutfitInCloset(updatedOutfitInCloset);
      });
  }
 

    return (
        <form onSubmit={(e) => handleUpdateOutfitInCloset(e, id)}>
        <input
          type="text"
          name="name"
          placeholder="new outfit name"
          value={updatedOutfitInCloset.name}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, name: e.target.value})}
        />
      <input
          type="number"
          name="temp"
          step="0.01"
          placeholder="new °C temp"
          value={updatedOutfitInCloset.temp}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, temp: parseFloat(e.target.value)})}
        />
        <input
          type="text"
          name="rain"
          placeholder="true / false"
          value={updatedOutfitInCloset.rain}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, rain: e.target.value})}
        />
        <input
          type="text"
          name="occasion"
          placeholder="update occasion"
          value={updatedOutfitInCloset.occasion}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, occasion: e.target.value})}
        />
        <input
          type="text"
          name="city"
          placeholder="update city"
          value={updatedOutfitInCloset.city}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, city: e.target.value})}
        />
        <input
          type="text"
          name="image"
          placeholder="change Image URL .jpg"
          value={updatedOutfitInCloset.img}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, img: e.target.value})}
        />
        <input
          type="text"
          name="created_by"
          placeholder="change your username"
          value={updatedOutfitInCloset.createdBy}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, createdBy: e.target.value})}
        />

  
        <button type="submit">Add Outfit</button>
      </form>
    )
}