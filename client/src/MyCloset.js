import ClosetList from './ClosetList';
import NewOutfitForm from './NewOutfitForm';
// import { useState, useEffect } from 'react';

export default function MyCloset({outfitsInCloset, onAddOutfit, handleDelete, onUpdateOutfitInCloset}) {

// console.log('outfits in closet', outfitsInCloset)




    return (
        <>
        <h1>My CLOSET</h1>
        <ClosetList
        key={outfitsInCloset.id} 
        outfitsInCloset={outfitsInCloset}
        handleDelete={handleDelete}
        onUpdateOutfitInCloset={onUpdateOutfitInCloset} />
        <NewOutfitForm onAddOutfit={onAddOutfit} />
        </>
        
    )
}