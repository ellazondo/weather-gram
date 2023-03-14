import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Feed from './Feed';
import Signup from './Signup';
import Login from './Login';
import Users from './Users';
import OutfitInspo from './OutfitInspo';
import NavBar from './NavBar';
import LoggedOutNavBar from './LoggedOutNavBar';


export default function App() {
  // const [loggedIn, setLoggedIn] = useState(true)
  const [user, setUser] = useState(null)
  const [loginFormData, setLoginFormData] = useState({})
  const [signupFormData, setSignupFormData] = useState({})
  const [outfits, setOutfits] = useState([])


useEffect( () => {
    fetch('http://127.0.0.1:3000/outfits')
    .then(res=>res.json())
    .then(outfitData => console.log(outfitData))
},[])

  function onLogin(event){
  console.log(loginFormData)
    event.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginFormData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(userData => setUser(userData))
      }
      else if(response.status === 401){
        alert("Error: Invalid username or password! Please try again!")
      }
      else{
        alert(`Error: ${response.status} ${response.statusText}`)
      }
    })
  }

  // Check if user is currently logged in
  useEffect(() => {
    fetch("/me")
    .then(response => {
      if(response.ok){
        response.json().then(userData => setUser(userData))
      }
    })
  }, [])

  function updateLoginFormData(event){
    setLoginFormData({...loginFormData, [event.target.name]: event.target.value})
  }

  function onLogout(){
    fetch("/logout", {
      method: "DELETE"
    })
    .then(response => {
      if(response.ok){
        setUser(null)
      }
    })
  }

  function updateSignupFormData(event){
    setSignupFormData({...signupFormData, [event.target.name]: event.target.value})
  }

  function onSignup(event){
    event.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signupFormData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(userData => setUser([...user, userData]))
      }
      else if(response.status === 422){
        alert("Error: Username already exists or invalid Username! Please try again!")
      }
      else{
        alert(`Error: ${response.status} ${response.statusText}`)
      }
    })
  }


  return (
    
     <div className="homepagewrapper"> 
      <header>
        {
          user ?
          <>
            <NavBar />
            <button onClick={onLogout}>Log Out</button>
            {`Welcome ${user.username}!`}
            <Feed defaultCity="New York" />

            <br/>
            
          </> :
          <>
          <LoggedOutNavBar />
                      
</>
        }


    
      <Switch>
          <Route exact path="/">
            
          </Route>
          <Route path="/login">
            {
              user ?
              null : 
              <Login onLogin={onLogin} updateLoginFormData={updateLoginFormData}/>
            }
          </Route>
          <Route path="/signup">
            {
              user ?
              "Please log out before signing up for an account" :
              <Signup onSignup={onSignup} updateSignupFormData={updateSignupFormData} />
            }
          </Route>
          <Route path="/todaysfeed">
            {user ?  <Feed /> : "Please log in to view today's feed"}
          </Route>
          <Route path="/users">
            {user ? <Users /> : "Please log in to see the users of Weather Gram"}
          </Route>
          <Route path="/outfitinspo">
            {user ? <OutfitInspo /> : "Please log in to see outfit inspiration"}
          </Route>
                    <Route path="/mycloset">
            {user ? <Users /> : "Please log in to access your closet"}
          </Route>
        </Switch>
        </header>
        </div>
          
  );
}


