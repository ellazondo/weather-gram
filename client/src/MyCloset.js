import ClosetList from './ClosetList';
import NewOutfitForm from './NewOutfitForm';
// import { useState, useEffect } from 'react';

export default function MyCloset({user, hangersInCloset, onAddOutfit, setHangersInCloset, onUpdateOutfitInCloset}) {




    return (
        <div className="pt-20 md:pt-40 pb-72 md:pb-96 bg-gray-900 overflow-hidden">
        <div className="group container px-4 mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-semibold text-white mb-12">@{user.username} CLOSET</h1>
        <ClosetList
        user={user}
        key={hangersInCloset.id} 
        hangersInCloset={hangersInCloset}
        setHangersInCloset={setHangersInCloset}
        onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
        <NewOutfitForm onAddOutfit={onAddOutfit} />
        </div>
        </div>
        
        
    )
}