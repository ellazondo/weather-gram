import React from "react";

export default function UserCard({ wgUser }) {

  
  // this page is displaying the WG users. Just their name and their picture



  return (
    <>
    <img class="md:transform group-hover:translate-y-3 block w-full mb-12 h-88 object-cover rounded-lg transition duration-500" src={wgUser.profile_pic} alt="" />
    <div class="max-w-2xs">
        <h5 class="text-3xl font-medium mb-4">@{wgUser.username}</h5>
        <p class="text-xl mb-12">User since: {wgUser.created_at}</p>
        <span class="text-sm font-medium">Last update: {wgUser.updated_at}</span>
    </div>
    </>

  );
}