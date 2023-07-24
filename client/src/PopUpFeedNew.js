import { useState, useEffect } from "react";

export default function PopUpFeedNew({
  wgUsers,
  user,
  appropriateOutfits,
  onAddHanger,
}) {
  const [popUpProfilePic, setPopUpProfilePic] = useState("");
  const [addedToCloset, setAddedToCloset] = useState(false);
  console.log("appropriateOutfits", appropriateOutfits);

  function handleSave(e) {
    console.log({
      outfit_id: appropriateOutfits.id,
      user_id: user.id,
    });
    setAddedToCloset(true);
    e.preventDefault();
    fetch("http://localhost:3000/hangers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        outfit_id: appropriateOutfits.id,
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((newHanger) => onAddHanger(newHanger));

    console.log("user.username", user.username);
  }

  useEffect(() => {
    wgUsers.filter((wgUser) => {
      if (appropriateOutfits.created_by === wgUser.username) {
        setPopUpProfilePic(wgUser.profile_pic);
      }
    });
  }, []);

  const { name, outfit_img, temp_range, rain, occasion, city, created_by } =
    appropriateOutfits || {};

  return (
    <>
      {/* ******start of inserted shuffle */}
      <div className="absolute bg-white left-5">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <div className="flex flex-wrap -mx-1">
                  <div className="md:w-full lg:w-1/4 px-1 mb-2 lg:mb-0">
                    <div className="flex lg:flex-col lg:h-full justify-between">
                      <a
                        className="block md:w-32 h-32 border border-blue-300"
                        href="#"
                      >
                        <img
                          className="w-full h-full p-1 lg:p-0 mr-2 lg:mr-0 object-cover"
                          src={popUpProfilePic}
                          alt=""
                        />
                      </a>
                      {appropriateOutfits.top ? (
                        <>
                          <a
                            className="block md:w-32 h-32 border border-transparent hover:border-gray-400"
                            target="_blank"
                            href={appropriateOutfits.top.zalando_link}
                          >
                            <img
                              className="w-full h-full p-1 lg:p-0 mr-2 lg:mr-0 object-cover"
                              src={appropriateOutfits.top.top_img}
                              alt=""
                            />
                          </a>
                          <a
                            className="block md:w-32 h-32 border border-transparent hover:border-gray-400"
                            target="_blank"
                            href={appropriateOutfits.bottom.zalando_link}
                          >
                            <img
                              className="w-full h-full p-1 lg:p-0 mr-2 lg:mr-0 object-cover"
                              src={appropriateOutfits.bottom.bottom_img}
                              alt=""
                            />
                          </a>
                          <a
                            className="block md:w-32 h-32 border border-transparent hover:border-gray-400"
                            target="_blank"
                            href={appropriateOutfits.shoe.zalando_link}
                          >
                            <img
                              className="w-full h-full p-1 lg:p-0 mr-2 lg:mr-0 object-cover"
                              src={appropriateOutfits.shoe.shoe_img}
                              alt=""
                            />
                          </a>
                        </>
                      ) : null}
                    </div>
                  </div>

                  <div className="md:w-full lg:w-3/4 px-1">
                    <div className="relative">
                      <a
                        className="absolute top-1/2 left-0 ml-8 transform translate-1/2"
                        href="#"
                      >
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
                            fill="#1F40FF"
                          ></path>
                        </svg>
                      </a>
                      <img
                        className="object-cover w-full h-full"
                        src={outfit_img}
                        alt=""
                      />
                      <a
                        className="absolute top-1/2 right-0 mr-8 transform translate-1/2"
                        href="#"
                      >
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
                            fill="#1F40FF"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4">
                <div>
                  <div className="mb-10 pb-10 border-b">
                    <span className="text-gray-500">{name}</span>
                    <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-5xl font-bold font-heading">
                      @{created_by}
                    </h2>

                    <p className="italic max-w-sm text-gray-400">
                      Suggested temperature range:
                    </p>
                    <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-300">
                      <span>{temp_range}°C</span>
                    </p>
                    <p className="max-w-md text-gray-500">{occasion}</p>
                    {rain ? (
                      <p className="max-w-md text-gray-500"> Raining</p>
                    ) : (
                      <p className="max-w-md text-gray-500">No Rain</p>
                    )}
                    <p className="max-w-md text-gray-500">{city}</p>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <a
                      className="block mb-4 lg:mb-0 lg:mr-6 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
                      href="#"
                      onClick={handleSave}
                    >
                      {addedToCloset ? "Added to Closet" : "Add to Closet"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ******end of inserted shuffle */}
    </>
  );
}
