import React, { useState } from "react";
import UserListAll from "./UserListAll";
import SearchWGUser from "./SearchWGUser";


export default function Users({ wgUsers }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(wgUsers)


  const displayedUsers = wgUsers.filter((wgUser) => {
    return wgUser.username.includes(searchTerm);
  });
  console.log('searched username', searchTerm)

  return (
   <>
    <SearchWGUser setSearchTerm={setSearchTerm} />

    <section class="py-20 md:py-40 bg-yellow-50 overflow-hidden">
        <div class="group container px-4 mx-auto">
            <div class="max-w-4xl mx-auto mb-40 text-center">
                <h1 class="text-5xl sm:text-7xl md:text-8xl font-heading font-semibold mb-12">What people say about suncealand</h1>
                <p class="max-w-xl mx-auto text-lg">Record your audio and upload it now. We'll help you distribute your podcast to Spotify, Apple and Google Podcasts.</p>
            </div>
        </div>

  <div class="max-w-xl mx-auto lg:max-w-none px-4 md:px-10">
    <h4 class="text-3xl font-medium mb-12">Excellent projects by and for our community</h4>
    
    <div class="flex flex-wrap -mx-3 mb-20">
      <UserListAll
        wgUsers={displayedUsers}
      />
      </div>



    
    <div class="text-center">
      <a class="relative group inline-flex h-15 w-44 items-center justify-center bg-black border-2 border-black rounded overflow-hidden" href="#">
        <span class="relative z-10 font-semibold uppercase text-white group-hover:text-black transition duration-500">See more</span>
        <div class="absolute top-0 left-0 h-full w-48 transform -translate-x-full -ml-1 group-hover:-translate-x-0 bg-white transition duration-500 ease-linear"></div>
      </a>
    </div>
</div>
</section>
</>
  );
}

    {/* <div class="w-full lg:w-1/3 px-3 mb-12 lg:mb-0">
        <a class="group block pb-20 border-b border-gray-50 hover:border-gray-100" href="#">
          <img class="md:transform group-hover:translate-y-3 block w-full mb-12 h-88 object-cover rounded-lg transition duration-500" src="suncealand-assets/images/portfolio-catalog2.png" alt="" />
          <div class="max-w-2xs">
            <h5 class="text-3xl font-medium mb-4">Sessam HAR9</h5>
            <p class="text-xl mb-12">A real nice tools and app. It comes with a few free</p>
            <span class="text-sm font-medium">SUMMER 2020</span>
          </div>
        </a>
      </div> */}

      {/* <div class="w-full lg:w-1/3 px-3">
        <a class="group block pb-20 border-b border-gray-50 hover:border-gray-100" href="#">
          <img class="md:transform group-hover:translate-y-3 block w-full mb-12 h-88 object-cover rounded-lg transition duration-500" src="suncealand-assets/images/portfolio-catalog1.png" alt="" />
          <div class="max-w-2xs">
            <h5 class="text-3xl font-medium mb-4">Sessam HAR9</h5>
            <p class="text-xl mb-12">A real nice tools and app. It comes with a few free</p>
            <span class="text-sm font-medium">SUMMER 2020</span>
          </div>
        </a>
      </div> */}