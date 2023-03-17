import ClosetList from './ClosetList';
import NewOutfitForm from './NewOutfitForm';
// import { useState, useEffect } from 'react';

export default function MyCloset({outfitsInCloset, onAddOutfit, handleDelete}) {

console.log('outfits in closet', outfitsInCloset)




    return (
        <>
        <h1>My CLOSET</h1>
        <ClosetList
        key={outfitsInCloset.id} 
        outfitsInCloset={outfitsInCloset}
        handleDelete={handleDelete} />
        <NewOutfitForm onAddOutfit={onAddOutfit} />
        </>
        
    )
}