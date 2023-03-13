export default function Signup({onSignup, updateSignupFormData}){
   
    return (
        <form onSubmit={onSignup}>
            <h1>Sign Up:</h1>
            <label>Username: </label>
            <input type="text" name="username" onChange={updateSignupFormData}/><br/>
            <br/>
            
            <label>Password: </label>
            <input type="text" name="password" onChange={updateSignupFormData}/><br/>
            <input type="submit"/>
        </form>
    )
}