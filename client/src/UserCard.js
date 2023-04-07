import { useState } from "react";
import PopUpUser from "./PopUpUser";

export default function UserCard({ wgUser, outfits }) {
  const [model, setModel] = useState(false)



  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric'};

const createdAt = new Date('2023-03-27T17:55:45.794Z').toLocaleString(undefined, dateOptions);
const updatedAt = new Date('2023-03-27T17:55:45.794Z').toLocaleString(undefined, dateOptions);

  
  // this page is displaying the WG users. Just their name and their picture



  return (
    <>
    <div className="relative">
    {model ? (
            <>
            <div className="absolute static w-screen h-screen flex justify-center items-center z-10">
              <PopUpUser 
              wgUser={wgUser} 
              outfits={outfits} 
              key={outfits.id} />
              
             </div>
             <button className="fixed bottom-4 right-4 z-10 text-black" onClick={() => setModel(false)}>Exit</button>
             </>
              )
            :
            null}
    <img 
    class="md:transform group-hover:translate-y-3 block w-full mb-12 h-88 object-cover rounded-lg transition duration-500" 
    src={wgUser.profile_pic} 
    alt=""
    onClick={() => setModel(!model)} />
    <div class="max-w-2xs">
        <h5 class="text-3xl font-medium mb-1">@{wgUser.username}</h5>
        <p class="text-sm italic">User since: {createdAt}</p>
        <span class="text-sm italic">Last update: {updatedAt}</span>
    </div>
    </div>
    </>

  );
}