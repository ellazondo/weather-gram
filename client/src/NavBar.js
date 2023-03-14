import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <>
            <Link to="/">Today's Feed</Link>
            <Link to="/outfitinspo">Inspo Page</Link>
            <Link to="/mycloset">My Closet</Link>
            <Link to="/users">Users </Link>
            <Link to="/logout">Logout </Link>
        </>
    )
}
