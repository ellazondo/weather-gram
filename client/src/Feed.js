import React, { useState } from "react";
// import "./Weather.css";
import axios from "axios";
import Fashion from "./Fashion";
import WeatherInfo from "./WeatherInfo";

export default function Feed({ outfits, onAddHanger, user }) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("New York");

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
    const apiKey = "7e51999498b98449960c3d517772a9e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    search();
    
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  if (ready) {
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
      <div className="flex flex-col items-center justify-center w-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
      <WeatherInfo data={weatherData} coordinates={weatherData.coordinates} />
      </div>
      
      <Fashion outfits={outfits} weatherData={weatherData} onAddHanger={onAddHanger} user={user} />
      
      </>
    );
  } else { 
    search();
    return ("loading...");
  }
  
}