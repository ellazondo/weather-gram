import React from "react";

export default function UserCard({ wgUser }) {
  console.log(wgUser)
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric'};

const createdAt = new Date('2023-03-27T17:55:45.794Z').toLocaleString(undefined, dateOptions);
const updatedAt = new Date('2023-03-27T17:55:45.794Z').toLocaleString(undefined, dateOptions);

  
  // this page is displaying the WG users. Just their name and their picture



  return (
    <>
    <img class="md:transform group-hover:translate-y-3 block w-full mb-12 h-88 object-cover rounded-lg transition duration-500" src={wgUser.profile_pic} alt="" />
    <div class="max-w-2xs">
        <h5 class="text-3xl font-medium mb-1">@{wgUser.username}</h5>
        <p class="text-sm italic">User since: {createdAt}</p>
        <span class="text-sm italic">Last update: {updatedAt}</span>
    </div>
    </>

  );
}