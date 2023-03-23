import FormattedDate from './FormattedDate';
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props) {
    // console.log(props.data)
    return (
        <div className="border-2 rounded-md min-h-0 flex items-center justify-left">
            <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
				<div className="font-bold text-xl">{props.data.city}</div>
				<div className="text-sm text-gray-500"><FormattedDate date={props.data.date} /></div>
				<div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                    <WeatherIcon code={props.data.icon} />
				</div>
					<div className="flex flex-row items-center justify-center mt-6">
							<div className="font-medium text-6xl">{Math.round(props.data.temperature)}</div>
							<div className="flex flex-col items-center ml-6">
								<div>{props.data.description}</div>
								<div className="mt-1">
									<span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
									<span className="text-sm font-light text-gray-500">28°C</span>
								</div>
								<div>
									<span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
									<span className="text-sm font-light text-gray-500">20°C</span>
								</div>
							</div>
						</div>
						<div className="flex flex-row justify-between mt-6">
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Wind</div>
								<div className="text-sm text-gray-500">{props.data.wind} k/h</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Humidity</div>
								<div className="text-sm text-gray-500">{props.data.humidity} %</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Precipitation</div>
								<div className="text-sm text-gray-500">{props.data.precipitation}km</div>
							</div>
						</div>
					</div>
</div>
        

      
    
      
    
    );
}

        // <div classNameName="WeatherInfo">
            
        //     <h1>{props.data.city}</h1>
        //     <ul>
        //         <li>
        //             <FormattedDate date={props.data.date} /> </li>
        //         <li classNameName="text-capitalize">{props.data.description}</li>
        //     </ul>
        //     <div classNameName="row mt-3">
        //         <div classNameName="col-6">
        //             <div classNameName="clearfix">
        //             <div classNameName="float-left">
        //             <WeatherIcon code={props.data.icon}  />
                    
        //                 <span classNameName="temperature">
        //                     {Math.round(props.data.temperature)}  
        //                     </span>
        //                     <span classNameName="unit">°F</span>
        //             </div>
                    
        //         </div>
        //     </div>
        //         <div classNameName="col-6">
        //             <ul>
        //                 <li>Percipitation: {props.data.precipitation} %</li>
        //                 <li>Humidity: {props.data.humidity}%</li>
        //                 <li>Wind: {props.data.wind} km/h</li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>