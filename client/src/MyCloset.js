import ClosetList from './ClosetList';
import NewOutfitForm from './NewOutfitForm';
// import { useState, useEffect } from 'react';

export default function MyCloset({user, hangersInCloset, onAddOutfit, setHangersInCloset, onUpdateOutfitInCloset}) {




    return (
        <>
        <h1>My CLOSET</h1>
        <ClosetList
        user={user}
        key={hangersInCloset.id} 
        hangersInCloset={hangersInCloset}
        setHangersInCloset={setHangersInCloset}
        onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
        <NewOutfitForm onAddOutfit={onAddOutfit} />
        </>
        
    )
}