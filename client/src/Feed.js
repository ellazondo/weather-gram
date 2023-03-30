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
      <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          
            <input type="submit" value="search" className="btn btn-primary w-100" />
          
       
      </form>
      {ready ? (
        <>
      <div className="flex flex-col items-center justify-center w-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
      <WeatherInfo 
      // weatherData={weatherData}
      
      data={weatherData} 
      coordinates={weatherData.coordinates} 
      />
      </div>
      
      <Fashion outfits={outfits} weatherData={weatherData} onAddHanger={onAddHanger} user={user} />
      
      <div className="flex flex-col items-center justify-center w-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <WeatherForecast data={weatherData} coordinates={weatherData.coordinates}  />
      </div>
      </>
      ) : (
         "loading..."
    )}
    </>

    );
    
  }
  
