export default function Login({ onLogin, updateLoginFormData }) {

    return (
            <form onSubmit={onLogin}>
            <h1>Log In:</h1>
            <label>Username: </label>
            <input type="text" name="username" onChange={updateLoginFormData}/><br/>

            {/* Allow the user to enter a password into the login form */}
            <label>Password: </label>
            <input type="text" name="password" onChange={updateLoginFormData}/><br/>
            <input type="submit"/>
        </form>
        
    );
}



    

