import React, { useState, useEffect } from "react";
// import "./Weather.css";
import axios from "axios";
import Fashion from "./Fashion";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Feed({ outfits, onAddHanger, user }) {
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

  function search() {

    const apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
 
  }

  useEffect(() => {
    search();
  }, [])
  

  function handleSubmit(e) {
    e.preventDefault();
    search();
    
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  // if (ready) {
    return (
      <>
      <h1 class="font-mono text-neutral-200 text-5xl xs:text-8xl sm:text-9xl xl:text-10xl 2xl:text-11xl font-semibold mb-5 mt-5 mr-8 text-right" >
            {/* <span class="inline-block max-w-md">Today's</span> */}
            <span class="inline center">Weather Gram</span>
          </h1>
      <form className="text-right mr-8" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          
            <input 
            type="submit" value="search" className="btn btn-primary w-100" />
          
       
      </form>
      {ready ? (
        <>
        <div className="flex w-8/12 justify-center mx-auto" style={{backgroundImage: `url("https://shuffle.dev/suncealand-assets/background/background-color-paint.png")` }}>
      <div className="flex items-center justify-center w-full text-gray-700 p-10 rounded" >
      <WeatherInfo 
      // weatherData={weatherData}
      
      data={weatherData} 
      coordinates={weatherData.coordinates} 
      />
      </div>
          <div className="flex items-center w-full justify-center text-gray-700 p-10 rounded">
      <WeatherForecast data={weatherData} coordinates={weatherData.coordinates}  />
      </div>
      </div>
      
      <Fashion outfits={outfits} weatherData={weatherData} onAddHanger={onAddHanger} user={user} />
      
  
      </>
      ) : (
         "loading..."
    )}
    </>

    );
    
  }
  
