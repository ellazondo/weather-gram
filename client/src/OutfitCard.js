import React from "react";

export default function OutfitCard({ outfit, onAddHanger, user }) {

  
  // const { name, outfit_img, temp } = outfit


  function handleSave (e) {
    console.log(outfit)
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
    
    
  }


  return (
    <li className="card">
      <img src={outfit.outfit_img} alt={outfit.name} />
      <h4>{outfit.name}</h4>
      <p>Suggested Temperature: {outfit.temp} °F</p>
    <button onClick={handleSave}>Save to closet</button>
    </li>
    
    
  );
}



