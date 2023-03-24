import UpdateOutfitInCloset from "./UpdateOutfitInCloset";

export default function PopUpFeedCloset ({ hangerInCloset, onUpdateOutfitInCloset, setHangersInCloset }) {
    // console.log('popup', outfit.outfit_img)
    // console.log('popup user', user)
    const { name, temp } = hangerInCloset.outfit || {};

      function handleDelete () {
      // console.log(id)
      fetch(`http://localhost:3000/hangers/${hangerInCloset.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setHangersInCloset(hangersInCloset => hangersInCloset.filter(hanger=> hanger.id !== hangerInCloset.id))
    })
  }
    
    

return (
    <>
 {/* <img className="w-full rounded-lg" src={outfit_img} alt={name} /> */}

      <h4>{name}</h4>
      <p>Suggested Temperature: {temp} °F</p>
      <button onClick={handleDelete}>Delete</button>
      <UpdateOutfitInCloset 
      id = {hangerInCloset.outfit?.id}
      onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
{/* BELOW IS EXAMPLE FROM POPUPOUTFIT    */}
{/* <div>
<img src={outfit.outfit_img} />
<ul>
<li> Temperature: {outfit.temp} </li>
<li> Occasion: {outfit.occasion} </li>
<li> Raining: {outfit.rain} </li>
<li> Created by: {outfit.created_by} </li>
</ul>
<button onClick={handleSave}> Save to closet</button> 
</div> */}

{/* BELOW WOUULD NOT ALLOW ME TO HANDLE SAVE */}
{/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
</>

 
);
}