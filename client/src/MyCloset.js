import ClosetList from './ClosetList';
import NewOutfitForm from './NewOutfitForm';
import { useState } from 'react';

export default function MyCloset({ user, hangersInCloset, onAddOutfit, setHangersInCloset, onUpdateOutfitInCloset}) {
    const [model, setModel] = useState(false)

    return (
        <div className="pt-20 md:pt-40 pb-72 md:pb-96 bg-gray-900 overflow-hidden">
        <div className="group container px-4 mx-auto">
            {model ? (
                <div className="relative">
            <NewOutfitForm onAddOutfit={onAddOutfit} user={user} />
            </div>
              )
            :
            null}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-semibold text-white mb-12">@{user.username} CLOSET</h1>
                        <span class="inline-flex items-center font-base font-semibold px-10">
                <span class="mr-2 text-white">Click on an outfit for more details</span>
                <div class="relative transition duration-500 animate-pulse text-white">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                  </svg>
                  <div class="absolute top-0 right-0 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="absolute top-0 right-0 -mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </span>
        <ClosetList
        user={user}
        key={hangersInCloset.id} 
        hangersInCloset={hangersInCloset}
        setHangersInCloset={setHangersInCloset}
        onUpdateOutfitInCloset={onUpdateOutfitInCloset} />

                <button onClick={() => setModel(!model)} class="inline-flex items-center font-base font-semibold px-10 mt-10">
                <span class="mr-2 text-white">Click here to add your own outfit</span>
                <div class="relative transition duration-500 animate-pulse text-white">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                  </svg>
                  <div class="absolute top-0 right-0 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="absolute top-0 right-0 -mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.00193 0.666626L0.0585938 1.60996L3.78193 5.33329L4.50195 5.99996L3.78193 6.66663L0.0585938 10.39L1.00193 11.3333L6.33526 5.99996L1.00193 0.666626Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </button>


        
        
        </div>
        </div>
        
        
    )
}