import UpdateOutfitInCloset from "./UpdateOutfitInCloset";
import PopUpUserCard from "./PopUpUserCard";
import { useState, useEffect } from 'react';

export default function PopUpUser ({ wgUser, outfits }) {
      const [userOutfits, setUserOutfits] = useState([])

useEffect(() => {
    const filteredOutfits = outfits.filter(
        (outfit) => outfit.created_by === wgUser.username 
    );
        setUserOutfits(filteredOutfits);
}, []);
console.log('userOutfits', userOutfits);
   
return(
    <div className="fixed inset-0 flex items-center justify-center">
    {/* <div className="absolute bg-white w-screen h-screen  z-10"> */}
        <div className="absolute bg-white w-screen h-screen z-10 overflow-auto">
        <section className="py-20 px-72">
            <p className="inline-block mb-2 text-2xl font-heading text-blue-300">Outfits by:</p>
            <h1 className="text-5xl sm:text-7xl font-heading font-semibold mb-5">@{userOutfits[1]?.created_by}</h1>
            <ul className="flex flex-wrap -mx-4 -mb-4">
                {userOutfits?.map((userOutfit) => {

    
return (

   
<PopUpUserCard userOutfit={userOutfit} key={userOutfit.id} />

    
    
    
 


 
);
})
}
</ul>
</section>
</div>
</div>
);
}

