export default function PopUpFeedOutfit ({ outfit, user, onAddHanger }) {
    // console.log('popup', outfit.outfit_img)
    // console.log('popup user', user)

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
    <>
{user.username === outfit.created_by ? (
    <div>
<img src={outfit.outfit_img} />
<ul>
<li> Temperature: {outfit.temp} </li>
<li> Occasion: {outfit.occasion} </li>
<li> Raining: {outfit.rain} </li>
<li> Created by: {outfit.created_by} </li>
</ul>
<button onClick={handleSave}> Save to closet</button>
<div>
{/* <button onClick={handleEdit}> edit </button>
<button onClick={handleOutfitDelete}> Delete outfit </button> */}
</div>
</div>
 )
: (
    <div>
<img src={outfit.outfit_img} />
<ul>
<li> Temperature: {outfit.temp} </li>
<li> Occasion: {outfit.occasion} </li>
<li> Raining: {outfit.rain} </li>
<li> Created by: {outfit.created_by} </li>
</ul>
<button onClick={handleSave}> Save to closet</button> 
</div> )}
</>


 
);
}

