import React from "react";

export default function UserCard({ wgUser }) {

  
  // this page is displaying the WG users. Just their name and their picture



  return (
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
    <li>
      <div class="w-full lg:w-1/3 px-3 mb-12 lg:mb-0">
        <a class="group block pb-20 border-b border-gray-50 hover:border-gray-100" href="#">
          <img class="md:transform group-hover:translate-y-3 block w-full mb-12 h-88 object-cover rounded-lg transition duration-500" src={wgUser.profile_pic} alt={wgUser.name} />
          <div class="max-w-2xs">
            <h5 class="text-3xl font-medium mb-4">{wgUser.username}</h5>
            {/* <p class="text-xl mb-12">A real nice tools and app. It comes with a few free</p> */}
            <span class="text-sm font-medium">
                {/* <button onClick={handleSave}>Save to closet</button> */}

            </span>
          </div>
        </a>
      </div>
      </li>
      
      
    </div>
    
    <div class="text-center">
      <a class="relative group inline-flex h-15 w-44 items-center justify-center bg-black border-2 border-black rounded overflow-hidden" href="#">
        <span class="relative z-10 font-semibold uppercase text-white group-hover:text-black transition duration-500">See more</span>
        <div class="absolute top-0 left-0 h-full w-48 transform -translate-x-full -ml-1 group-hover:-translate-x-0 bg-white transition duration-500 ease-linear"></div>
      </a>
    </div>
    
  </div>
 
</section>
  );
}