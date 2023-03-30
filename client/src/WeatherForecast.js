// import WeatherIconForecast from "./WeatherIconForecast";
import WeatherIcon from "./WeatherIcon";
import {useState, useEffect} from "react";
import axios from "axios";

export default function WeatherForecast (props) {
    console.log('propsinforecast', props.data.coordinates.lon)
      //forecast
  const [forecast, setForecast] = useState({});
  const [loaded, setLoaded] = useState(false);
    let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
        let lon = props.data.coordinates.lon;
        let lat = props.data.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

        
useEffect(() => {
  axios.get(apiUrl).then((response) => {
    setForecast(response.data.list);
    setLoaded(true);
  });
}, [apiUrl])

// console.log('weathericon2', forecast[1].weather[1].icon)

  
if (loaded) {
    return (
        <div  className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">

// beginning of weather forecast    
            <div  className="flex justify-between mt-12">
{/* first */}
                <div  className="flex flex-col items-center">
        <div className="inline">
        <span  className="font-semibold text-lg">{Math.round(forecast[0].main.temp_min)} </span>
        <span  className="text-lg">
        | {Math.round(forecast[0].main.temp_max)}°C </span>
        </div>
        <div   className="mt-3 mb-3 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-10 w-10">
      {/* <WeatherIcon code={forecast[0].weather[0].icon} /> */}
      </div>
        {/* <svg  className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> */}
        <span  className="font-semibold mt-1 text-sm">
            {forecast[0].dt}
          {/* <FormattedDate date={props.data.date} /> */}
        </span>
        <span  className="text-xs font-semibold text-gray-400"></span>
      </div>
{/* second */}
      <div  className="flex flex-col items-center">
        <div className="inline">
        <span  className="font-semibold text-lg">{Math.round(forecast[1].main.temp_min)} </span>
        <span  className="text-lg">
        | {Math.round(forecast[1].main.temp_max)}°C </span>
        </div>
      <div   className="mt-3 mb-3 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-10 w-10">
      {/* <WeatherIcon code={forecast[1].weather[1].icon} /> */}
      
      </div>
        {/* <svg  className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> */}
        <span  className="font-semibold mt-1 text-sm">{forecast[1].dt}</span>
        <span  className="text-xs font-semibold text-gray-400"></span>
      </div>
{/* third */}
      <div  className="flex flex-col items-center">
        <div className="inline">
        <span  className="font-semibold text-lg">{Math.round(forecast[2].main.temp_min)} </span>
        <span  className="text-lg">
        | {Math.round(forecast[2].main.temp_max)}°C </span>
        </div>
        <div className="mt-3 mb-3 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-10 w-10">
            {/* <WeatherIcon code={forecast[2].weather[2].icon} /> */}
        </div>
        {/* <svg  className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> */}
        <span  className="font-semibold mt-1 text-sm">{forecast[2].dt}</span>
        <span  className="text-xs font-semibold text-gray-400"></span>
      </div>

{/* fourth */}
    <div  className="flex flex-col items-center">
        <div className="inline">
        <span  className="font-semibold text-lg">{Math.round(forecast[3].main.temp_min)} </span>
        <span  className="text-lg">
        | {Math.round(forecast[3].main.temp_max)}°C </span>
        </div>
        <div className="mt-3 mb-3 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-10 w-10">
            {/* <WeatherIcon code={forecast[3].weather[3].icon} /> */}
        </div>
        {/* <svg  className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> */}
        <span  className="font-semibold mt-1 text-sm">{forecast[3].dt}</span>
        <span  className="text-xs font-semibold text-gray-400"></span>
      </div>

 {/* fifth */}

    <div  className="flex flex-col items-center">
        <div className="inline">
        <span  className="font-semibold text-lg">{Math.round(forecast[4].main.temp_min)} </span>
        <span  className="text-lg">
        | {Math.round(forecast[4].main.temp_max)}°C </span>
        </div>
        <div className="mt-3 mb-3 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-10 w-10">
            {/* <WeatherIcon code={forecast[3].weather[4].icon} /> */}
        </div>
        {/* <svg  className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> */}
        <span  className="font-semibold mt-1 text-sm">{forecast[4].dt}</span>
        <span  className="text-xs font-semibold text-gray-400"></span>
      </div>

    </div>

  </div>

    );
} else { <h1>loading...</h1>}
}

