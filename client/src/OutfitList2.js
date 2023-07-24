import { useState } from "react";
import PopUpFeedNew from "./PopUpFeedNew";
// import WeatherIcon2 from "./WeatherIcon2";

export default function OutfitList2({
  outfits,
  weatherData,
  onAddHanger,
  user,
  wgUsers,
  hangersInCloset,
}) {
  const [model, setModel] = useState(false);
  // const [model2, setModel2] = useState(false);
  // const [model3, setModel3] = useState(false);
  // const [model4, setModel4] = useState(false);
  // const [model5, setModel5] = useState(false);
  // const [model6, setModel6] = useState(false);

  const appropriateOutfits = outfits.filter((outfit) => {
    let splitTemp = outfit.temp_range.split("-");
    let min_temp = parseInt(splitTemp[0]);
    let max_temp = parseInt(splitTemp[1]);
    return (
      Math.round(weatherData.temperature) >= min_temp &&
      Math.round(weatherData.temperature) <= max_temp
    );
  });

  return (
    <>
      <div className="flex flex-wrap mb-12 lg:mb-16 -m-6">
        <div className="w-full md:w-1/2 p-6">
          <div className="flex flex-wrap -m-6">
            <div className="w-full lg:w-1/2 p-6 ">
              <img
                className="w-full h-64 object-cover rounded-t-full"
                src={appropriateOutfits[1]?.outfit_img}
                alt=""
                onClick={() => setModel(!model)}
              />
              {model ? (
                <PopUpFeedNew
                  onAddHanger={onAddHanger}
                  user={user}
                  wgUsers={wgUsers}
                  appropriateOutfits={appropriateOutfits[1]}
                  hangersInCloset={hangersInCloset}
                />
              ) : null}
            </div>

            <div className="w-full lg:w-1/2 p-6 ">
              <img
                className="w-full h-64 object-cover rounded-t-full"
                src={appropriateOutfits[2]?.outfit_img}
                alt=""
                // onClick={() => setModel2(!model2)}
              />
              {/* {model ? (
                <PopUpFeedNew
                  onAddHanger={onAddHanger}
                  user={user}
                  wgUsers={wgUsers}
                  appropriateOutfits={appropriateOutfits[2]}
                  hangersInCloset={hangersInCloset}
                />
              ) : null} */}
            </div>

            <div className="w-full p-6">
              <img
                className="w-full h-112 object-cover"
                src={appropriateOutfits[3]?.outfit_img}
                alt=""
                // onClick={() => setModel3(!model3)}
              />
              {/* {model ? (
                <PopUpFeedNew
                  onAddHanger={onAddHanger}
                  user={user}
                  wgUsers={wgUsers}
                  appropriateOutfits={appropriateOutfits[3]}
                  hangersInCloset={hangersInCloset}
                />
              ) : null} */}
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
                // onClick={() => setModel4(!model4)}
              />
              {/* {model ? (
                <PopUpFeedNew
                  onAddHanger={onAddHanger}
                  user={user}
                  wgUsers={wgUsers}
                  appropriateOutfits={appropriateOutfits[4]}
                  hangersInCloset={hangersInCloset}
                />
              ) : null} */}
            </div>

            <div className="w-full lg:w-1/2 p-6">
              <img
                className="w-full h-64 object-cover rounded-b-full"
                src={appropriateOutfits[5]?.outfit_img}
                alt=""
                // onClick={() => setModel5(!model5)}
              />
              {/* {model ? (
                <PopUpFeedNew
                  onAddHanger={onAddHanger}
                  user={user}
                  wgUsers={wgUsers}
                  appropriateOutfits={appropriateOutfits[5]}
                  hangersInCloset={hangersInCloset}
                />
              ) : null} */}
            </div>

            <div className="w-full lg:w-1/2 p-6">
              <img
                className="w-full h-64 object-cover"
                src={appropriateOutfits[6]?.outfit_img}
                alt="not enough data, please sign up and share your fashion for the weather for more content."
                // onClick={() => setModel6(!model6)}
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
