import { useState } from 'react';

export default function UpdateOutfitInCloset ( {hangerInCloset, id, onUpdateOutfitInCloset} ) {
  const { name, outfit_img } = hangerInCloset.outfit || {};
    const [updatedOutfitInCloset, setUpdatedOutfitInCloset] = useState({})

    
    function handleUpdateOutfitInCloset(e, id) {
    e.preventDefault();
    console.log(id)
    fetch(`http://localhost:3000/outfits/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOutfitInCloset),
    })
      .then((r) => r.json())
      .then((updatedOutfit) => {
        onUpdateOutfitInCloset(updatedOutfit);
      });
  }
 
//  <div className="absolute w-full md:max-w-xl lg:max-w-4xl mx-auto px-6 md:px-20 py-18 md:py-32 bg-white rounded-4xl ">

    return (
       <div className="fixed top-0 left-0 right-0 w-full container mx-auto px-6 py-18 md:py-30 bg-white rounded-4xl ">
      <div className="max-w-md mx-auto text-center">
        <h1 className="font-heading font-semibold text-5xl mb-10">UPDATE THIS OUTFIT</h1>
<span className= "inline-block relative w-20 h-20 rounded-full mr-4">
<img src={outfit_img} alt={name} />
</span>

        <div className="max-w-md mx-auto">

          <form onSubmit={(e) => handleUpdateOutfitInCloset(e, id)}>
            <div className="max-w-md xl:max-w-3xl mx-auto">

              <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
 				<input 
        className="w-full bg-transparent text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg" 
					type="text" 
					name="name"
					placeholder="new outfit name" 
					value={updatedOutfitInCloset.name} 
					onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, name: e.target.value})}/>
              </div>
              <div className="relative group px-4 pt-2.5 pb-2 mb-4 bg-gray-50 rounded-lg">
 			
 				<input className="w-full bg-transparent text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg" 
					type="text"
					name="temp"
					step="0.01" 
					placeholder="new temp °C"
		   value={updatedOutfitInCloset.temp}
          	onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, temp: parseFloat(e.target.value)})}/>

              </div>

          <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
				<input className="w-full bg-transparent text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg" 
					type="text" 
					name="rain"
					placeholder="raining? true/false" 
					value={updatedOutfitInCloset.rain} 
					onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, rain: e.target.value})}/>
              </div>

              <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
				<input className="w-full bg-transparent text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg" 
					type="text" 
					name="occasion"
					placeholder="occasion" 
					value={updatedOutfitInCloset.occasion} 
					onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, occasion: e.target.value})}/>
              </div>

              <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
				<input className="w-full bg-transparent text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg" 
					type="text" 
					name="city"
					placeholder="city" 
					value={updatedOutfitInCloset.city} 
					onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, city: e.target.value})}/>
              </div>

              <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
				<input className="w-full bg-transparent text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg" 
					type="text" 
					name="outfit_img"
					placeholder="image url address" 
					value={updatedOutfitInCloset.outfit_img} 
					onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, outfit_img: e.target.value})}/>
              </div>

              <div className="relative group px-4 pt-2.5 pb-2 mb-2 bg-gray-50 rounded-lg">
				<input className="w-full bg-transparent text-base placeholder-blueGray-900 font-semibold outline-none rounded-lg" 
					type="text" 
					name="created_by"
					placeholder="username" 
					value={updatedOutfitInCloset.created_by} 
					onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, created_by: e.target.value})}/>
              </div>
              <div className="text-center">
                <a className="group relative inline-block h-16 mb-8 w-full md:w-44 bg-blueGray-900 rounded" >
                  <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                    <div className="flex h-full w-full items-center justify-center bg-blue-500 border-2 border-blueGray-900 rounded">
                      <button type="submit" className="text-base font-semibold uppercase">UPDATE OUTFIT</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        
    )
}
{/* // DELETED TO ADD STYLING */}
{/* <form onSubmit={(e) => handleUpdateOutfitInCloset(e, id)}>
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
          name="outfit_img"
          placeholder="change Image URL .jpg"
          value={updatedOutfitInCloset.outfit_img}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, outfit_img: e.target.value})}
        />
        <input
          type="text"
          name="created_by"
          placeholder="username"
          value={updatedOutfitInCloset.created_by}
          onChange={(e) => setUpdatedOutfitInCloset({...updatedOutfitInCloset, created_by: e.target.value})}
        />

  
        <button type="submit">Update Outfit</button>
      </form> */}



