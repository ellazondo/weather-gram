import ClosetList from './ClosetList';
import { useState, useEffect } from 'react';

export default function MyCloset() {
const [outfitsInCloset, setOutfitsInCloset] = useState([]);

// fetching to the backend asking for all of the hangers
  useEffect(() => {
    fetch("http://localhost:3000/hangers")
      .then((res) => res.json())
      .then(Hangers => setOutfitsInCloset(Hangers));
  }, []);

    return (
        <ClosetList outfitsInCloset={outfitsInCloset} />
        
    )
}