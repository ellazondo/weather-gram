import { Link } from 'react-router-dom';

function LoggedOutNavBar(){
    return (
        <>
        <div className="signupWrapper">
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}

export default LoggedOutNavBar;