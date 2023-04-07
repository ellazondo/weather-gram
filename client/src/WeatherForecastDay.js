
import React from "react";

export default function WeatherForecastDay ({dateString}) {
    console.log('dateString', dateString)
    
// function getDayOfWeek(dateString) {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getDay()];
//   return dayOfWeek;
//   const dateString = '2023-03-30';
// const dayOfWeek = getDayOfWeek(dateString);
console.log(dayOfWeek);
// }


return(
<h1>{dayOfWeek}</h1>
);

    
    

}