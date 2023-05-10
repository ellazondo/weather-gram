import React, { useState, useEffect } from "react";
// import "./Weather.css";
import axios from "axios";
import OutfitList2 from "./OutfitList2";
import WeatherInfo2 from "./WeatherInfo2";
// import WeatherForecast from "./WeatherForecast";

export default function Feed2({ outfits, onAddHanger, user }) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("New York");


  //daily weather
  function handleResponse (response) {
    console.log('feed', response.data)
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date (response.data.dt * 1000),
      icon: response.data.weather[0].icon
    })
    setReady(true);
    
  }

    function handleSubmit(e) {
    e.preventDefault();
    search();
    
  }

      useEffect(() => {
    search();
  }, [])

  function search() {

    const apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
 
  }


 

      return (
      <>

  
      {ready ? (
        <section class="py-20 2xl:py-40">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      {/* <div class="max-w-xl mx-auto mb-12 lg:mb-16 text-center">

        <h2 class="mt-8 mb-16 text-5xl font-bold font-heading"></h2>
      </div> */}
      <div class="lg:flex justify-center mb-16 mx-auto pb-6">
      
	<WeatherInfo2 
      data={weatherData} 
      coordinates={weatherData.coordinates} 
      // setCity={setCity}
      // handleSubmit={handleSubmit}
      />

      </div>



	<OutfitList2 
    outfits={outfits} 
    weatherData={weatherData} 
    onAddHanger={onAddHanger} 
    user={user} 
    handleSubmit={handleSubmit} 
    setCity={setCity} />

     


      <div class="mt-20 text-center">
        <a class="inline-block py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full" href="#">See all</a>
      </div>
    </div>
  </div>
</section>







      
     
  
      
      ) : (
         "loading..."
    )}
    </>

    );
    
  }