import React from "react";
import WeatherIcon2 from "./WeatherIcon2";

export default function OutfitList2({
  outfits,
  weatherData,
  onAddHanger,
  user,
}) {
  // deleted props:   handleSubmit,setCity
  // function handleCityChange(e) {
  //   setCity(e.target.value);
  // }

  const appropriateOutfits = outfits.filter((outfit) => {
    let splitTemp = outfit.temp_range.split("-");
    let min_temp = parseInt(splitTemp[0]);
    let max_temp = parseInt(splitTemp[1]);
    return (
      Math.round(weatherData.temperature) >= min_temp &&
      Math.round(weatherData.temperature) <= max_temp
    );
  });

  // return (
  //   <>
  //     <div className="flex flex-wrap mb-12 lg:mb-16 -m-6">
  //       {appropriateOutfits.map((appropriateOutfit) => {
  //         let splitTemp = outfit.temp_range.split("-");
  //         let min_temp = parseInt(splitTemp[0]);
  //         let max_temp = parseInt(splitTemp[1]);

  //         if (
  //           Math.round(weatherData.temperature) >= min_temp &&
  //           Math.round(weatherData.temperature) <= max_temp
  //         ) {
  //   console.log('seeing which outfit', outfits[index].outfit_img)
  return (
    <>
      {/* trying something */}
      {/* <div className="h-64 border-solid bg-pink-100 mb-12 mt-0">
        <button class="w-full md:w-auto px-8 py-4 text-2xl text-gray-400 mb-12">
          <div className="flex flex-col">
            <div className="">
              {weatherData.city}
              <WeatherIcon2 code={weatherData.icon} />
            </div>
            <div className="">
              <form
                className="absolute right-30 rounded-full"
                onSubmit={handleSubmit}
              >
                <input
                  type="search"
                  placeholder="Different city..."
                  className="text-sm text-blue-300 font-normal"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <span className="">
                  <input
                    type="submit"
                    value="Search"
                    className="text-sm ml-3 inline-flex"
                  />{" "}
                </span>
              </form>
            </div>
          </div>
        </button>
      </div> */}
      {/* trying something */}

      <div className="flex flex-wrap mb-12 lg:mb-16 -m-6">
        <div className="w-full md:w-1/2 p-6">
          <div className="flex flex-wrap -m-6">
            <div className="w-full lg:w-1/2 p-6 ">
              <img
                className="w-full h-64 object-cover rounded-t-full"
                src={appropriateOutfits[1]?.outfit_img}
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=959&amp;q=80";
                }}
              />
            </div>

            <div className="w-full lg:w-1/2 p-6 ">
              <img
                className="w-full h-64 object-cover rounded-t-full"
                src={appropriateOutfits[2]?.outfit_img}
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=959&amp;q=80";
                }}
              />
            </div>

            <div className="w-full p-6">
              <img
                className="w-full h-112 object-cover"
                src={appropriateOutfits[3]?.outfit_img}
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80";
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
                src={appropriateOutfits[4]?.outfit_img}
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80";
                }}
              />
            </div>

            <div className="w-full lg:w-1/2 p-6">
              <img
                className="w-full h-64 object-cover rounded-b-full"
                src={appropriateOutfits[5]?.outfit_img}
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://www.canva.com/design/DAFpFZHEYDc/1ZWRO6lPo7mBYo2jFHd2Gw/edit?utm_content=DAFpFZHEYDc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
                }}
              />
            </div>

            <div className="w-full lg:w-1/2 p-6">
              <img
                className="w-full h-64 object-cover"
                src={appropriateOutfits[6]?.outfit_img}
                alt="not enough data, please sign up and share your fashion for the weather for more content."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  //   }
  // })
  // }
  // </div>
  // </>
  // );
}
