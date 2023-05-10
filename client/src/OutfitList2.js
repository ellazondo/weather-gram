import React from "react";
import WeatherIcon2 from "./WeatherIcon2";


export default function OutfitList2({ outfits, weatherData, handleSubmit, setCity, onAddHanger, user }) {
  
    function handleCityChange(e) {
    setCity(e.target.value);
  }
  
  const appropriateOutfits = outfits.filter(outfit => {
    let splitTemp = outfit.temp_range.split("-")
    let min_temp = parseInt(splitTemp[0])
    let max_temp = parseInt(splitTemp[1])    
    return (Math.round(weatherData.temperature) >= min_temp && Math.round(weatherData.temperature) <= max_temp)
  })

//   console.log('appropriateOutfits[0]', appropriateOutfits[0].outfit_img)
//   console.log(appropriateOutfits[1])
//   console.log(appropriateOutfits[2])
//   console.log(appropriateOutfits[3])
  
  return (
    <>
      <div className="flex flex-wrap mb-12 lg:mb-16 -m-6">
      {outfits.map((outfit) => {
        
        let splitTemp = outfit.temp_range.split("-")
        let min_temp = parseInt(splitTemp[0])
        let max_temp = parseInt(splitTemp[1])
        
        
        if (Math.round(weatherData.temperature) >= min_temp && Math.round(weatherData.temperature) <= max_temp) {
        //   console.log('seeing which outfit', outfits[index].outfit_img)
        return (
            <>

        <div className="w-full md:w-1/2 p-6">
          <div className="flex flex-wrap -m-6">

            {/* <div className="w-full lg:w-1/2 p-6">
              <img 
              className="w-full h-64 object-cover object-top rounded-t-full" 
              src={appropriateOutfits[0]?.outfit_img} 
              alt=""
              	onError={(e) => {
				e.target.src = 'https://images.unsplash.com/photo-1618005198920-f0cb6201c115?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80'
				}}
              />
            </div> */}
            {/* **********Trying new */}

                <div className="w-full lg:w-1/2 p-6 ">
                  <div className="w-full h-64 object-cover object-top rounded-t-full border-solid bg-pink-100">
         <h1 className="flex flex-center">
        <WeatherIcon2 code={weatherData.icon} />
        </h1>
        
        <h3 class="">{Math.round(weatherData.temperature)}°C
            <span className="block italic">
        {weatherData.description}
        </span>
        </h3>


        </div>
        </div>

        {/* **********Trying new */}

        {/* ****************trying new 2 start */}

            {/* <div className="w-full lg:w-1/2 p-6">
              <img 
              className="w-full h-64 object-cover rounded-t-full" 
              src={appropriateOutfits[1]?.outfit_img}
              alt=""
              			onError={(e) => {
					e.target.src = 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=959&amp;q=80'
				}}
              />
            </div> */}

                            <div className="w-full lg:w-1/2 p-6 ">
                  <div className="w-full h-64 object-cover object-top rounded-t-full border-solid bg-pink-100">
  

            <button class="w-full md:w-auto px-8 py-4 text-5xl font-bold rounded-lg mb-12">
        <div className="flex flex-col">
        <div className="">
        {weatherData.city}
        </div>
        <div className="">
                

                <form className="absolute right-30 rounded-full" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        placeholder="Enter a city"
                        className="text-sm text-blue-300 font-normal"
                        autoFocus="on"
                        onChange={handleCityChange}
                        
                    />
                    <span className="">
                    <input 
                        type="submit" value="Search" className="text-sm ml-3 inline-flex" /> </span>
                </form>
                </div>
                </div>
            
       
       </button>


        </div>
        </div>

            {/* *********trying new 2 end */}

            <div className="w-full p-6">
              <img className="w-full h-112 object-cover" 
              src={appropriateOutfits[2]?.outfit_img}
              alt=""
              	onError={(e) => {
				e.target.src='https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80' 
				}}
              />
            </div>

          </div>
        </div>
  
        <div className="w-full md:w-1/2 p-6">
          <div className="flex flex-wrap -m-6">


            <div className="w-full p-6">
              <img 
              className="w-full h-112 object-cover" 
              src={appropriateOutfits[3]?.outfit_img}
              alt=""
              	onError={(e) => {
				e.target.src = "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" 
				}}
              />
            </div>

            <div className="w-full lg:w-1/2 p-6">
              <img 
              className="w-full h-64 object-cover rounded-b-full" 
              src={appropriateOutfits[4]?.outfit_img}
              alt=""
              	onError={(e) => {
				e.target.src = "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=959&amp;q=80" 
				}}
              />
            </div>

            <div className="w-full lg:w-1/2 p-6">
              <img 
              className="w-full h-64 object-cover" 
              src={appropriateOutfits[5]?.outfit_img}
              alt=""
              	onError={(e) => {
				e.target.src = "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80" 
				}}
              />
            </div>

          </div>
        </div>
        </>
  
        );
        } 
        
      }
      
      )}
    </div>
    </>
  );
}
      
        
  

      




