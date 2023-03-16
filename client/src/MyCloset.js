import ClosetList from './ClosetList';
// import { useState, useEffect } from 'react';

export default function MyCloset({outfitsInCloset}) {
// const [outfitsInCloset, setOutfitsInCloset] = useState([]);
console.log('outfits in closet', outfitsInCloset)
// // fetching to the backend asking for all of the hangers
//   useEffect(() => {
//     fetch("http://localhost:3000/hangers")
//       .then((res) => res.json())
//       .then(Hangers => setOutfitsInCloset(Hangers));
//   }, []);


    return (
        <>
        <ClosetList
        key={outfitsInCloset.id} 
        outfitsInCloset={outfitsInCloset} />
        </>
        
    )
}