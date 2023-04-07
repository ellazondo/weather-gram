import React, { useState } from "react";
import UserListAll from "./UserListAll";
import SearchWGUser from "./SearchWGUser";


export default function Users({ wgUsers, outfits }) {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(wgUsers)


  const displayedUsers = wgUsers.filter((wgUser) => {
    return wgUser.username.includes(searchTerm);
  });
  // console.log('searched username', searchTerm)

  return (
   <>
    <SearchWGUser setSearchTerm={setSearchTerm} />

    <section class="py-20 md:py-40 bg-yellow-50 overflow-hidden">
        <div class="group container px-4 mx-auto">
            <div class="max-w-4xl mx-auto mb-40 text-center">
                <h1 class="text-5xl sm:text-7xl md:text-8xl font-heading font-semibold mb-12">Weather Grammers</h1>
                <p class="max-w-xl mx-auto text-lg">Check out all of the users of Weather Gram.</p>
            </div>
        </div>

  <div class="max-w-xl mx-auto lg:max-w-none px-4 md:px-10">
    {/* <h4 class="text-3xl font-medium mb-12">Excellent projects by and for our community</h4> */}
    
    <div class="flex flex-wrap -mx-3 mb-20">
      <UserListAll
        wgUsers={displayedUsers}
        outfits={outfits}

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

