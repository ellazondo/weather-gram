import UserCard from "./UserCard";
import React from "react";

export default function UserListAll ({ wgUsers, outfits }) {
    return (
        <ul className="flex flex-wrap">
      {wgUsers.map((wgUser) => {
        return (
 

      <div class="w-full lg:w-1/3 px-3 mb-12 lg:mb-0">
        <a class="group block pb-20 border-b border-gray-50 hover:border-gray-100">
            <UserCard
            key={wgUser.id}
            wgUser={wgUser}
            outfits={outfits}
          />

        </a>
      </div>

      

        );
        

        
      })}
    </ul>
  );

    
}