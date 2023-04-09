
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon (props) {
    // console.log('should be 043', props.code)

    const codeMapping = {
        "01d" : "CLEAR_DAY",
        "01n" : "CLEAR_NIGHT",
        "02d" : "PARTYLY_CLOUDY_DAY",
        "02n" : "PARTLY_CLOUDY_NIGHT",
        "013d" : "CLOUDY",
        "03n" : "CLOUDY",
        "04d" : "CLOUDY",
        "04n" : "CLOUDY",
        "09d" : "RAIN",
        "09n" : "RAIN",
        "10d" : "RAIN",
        "10n" : "RAIN",
        "11d" : "RAIN",
        "11n" : "RAIN",
        "13d" : "SNOW",
        "13n" : "SNOW",
        "50d" : "FOG",
        "50n" : "FOG",
    };

    return (
            <ReactAnimatedWeather
                icon= {codeMapping[props.code]}
                color= "lightblue"
                size={90}
                animate={true}
            />
            
        );

    
    

}