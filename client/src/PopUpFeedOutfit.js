export default function PopUpFeedOutfit ({ outfit, user, onAddHanger }) {
    // console.log('popup', outfit.outfit_img)
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
    <div>
<img src={outfit.outfit_img} />
<ul>
<li> Temperature: {outfit.temp} </li>
<li> Occasion: {outfit.occasion} </li>
<li> Raining: {outfit.rain} </li>
<li> Created by: {outfit.created_by} </li>
</ul>
<button onClick={handleSave}> Save to closet</button> 
</div>
{/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
</>

 
);
}



