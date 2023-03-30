import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Feed from './Feed';
import Signup from './Signup';
import Login from './Login';
import Users from './Users';
import OutfitInspo from './OutfitInspo';
import NavBar from './NavBar';
import LoggedOutNavBar from './LoggedOutNavBar';
import MyCloset from './MyCloset';
import Home from './Home';
import OutfitBreakdown from './OutfitBreakdown';


export default function App() {
  // const [loggedIn, setLoggedIn] = useState(true)
  const [user, setUser] = useState(null)
  const [loginFormData, setLoginFormData] = useState({})
  const [signupFormData, setSignupFormData] = useState({})
  const [outfits, setOutfits] = useState([])
  const [hangersInCloset, setHangersInCloset] = useState([]);
  const [wgUsers, setWgUsers] = useState([])

// fetching to the backend asking for all of the hangers
  useEffect(() => {
    fetch("http://localhost:3000/hangers")
      .then((res) => res.json())
      .then(Hangers => setHangersInCloset(Hangers));
  }, []);
  
// fetching to the backend asking for all of the users
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then(WGUserData => setWgUsers(WGUserData));
  }, []);


  useEffect(() => {
    fetch("http://localhost:3000/outfits")
      .then((r) => r.json())
      .then((OutfitsArray) => {
        setOutfits(OutfitsArray);
      });
  }, []);



  // console.log('outfits in closet', hangersInCloset)

  function onLogin(event){
  // console.log(loginFormData)
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

  //This is in response to clicking Add To Closet
  function handleAddHanger(newHanger){
    const updatedHangerArray = [...hangersInCloset, newHanger];
    setHangersInCloset(updatedHangerArray);
  }

//this is in response to filling out and submiting a new outfit form
//It will add the outfit to /todaysfeed
  function onAddOutfit(newOutfit) {
    console.log('new outfit', newOutfit)
    const updatedOutfitArray = [...outfits, newOutfit];
    setOutfits(updatedOutfitArray); 
    fetch("http://localhost:3000/hangers" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
        outfit_id: newOutfit.id,
        user_id: user.id
      })
    })
  .then(r=> r.json())
  .then((newHanger) => console.log([...hangersInCloset, newHanger]))
    
  }


   function handleUpdateOutfitInCloset(updatedOutfit) {
        const updatedhangersInClosetArray = outfits.map((outfit) => {
            if (outfit.id === updatedOutfit.id) {
                return updatedOutfit;
                } else {
                    return outfit;
                }
            });
            console.log(updatedhangersInClosetArray)
    setOutfits(updatedhangersInClosetArray);
  }




  return (
    
     <div className="homepagewrapper"> 
      <header>
        {
          user ?
          <>
            <NavBar user={user} onLogout={onLogout}/>
            

            <br/>
            
          </> :
          <>
          <LoggedOutNavBar />
                      
</>
        }


    
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            {
              user ?
              <Home />
                : 
              <Login onLogin={onLogin} updateLoginFormData={updateLoginFormData}  />
            }
          </Route>
          <Route path="/signup">
            {
              user ?
              "Please log out before signing up for an account" :
              <Signup onSignup={onSignup} updateSignupFormData={updateSignupFormData}  />
            }
          </Route>
          <Route path="/todaysfeed">
            {user ?  
            
            <Feed outfits={outfits} onAddHanger={handleAddHanger} user={user} /> : "Please log in to view today's feed"}
            
          </Route>
          <Route path="/users">
            {user ? <Users wgUsers={wgUsers} /> : "Please log in to see the users of Weather Gram"}
          </Route>
          <Route path="/outfitinspo">
            {user ? <OutfitInspo outfits={outfits} user={user} /> : "Please log in to see outfit inspiration"}
          </Route>
          <Route path="/outfitbreakdown">
            {user ? <OutfitBreakdown outfits={outfits} user={user} /> : "Please log in to shop the looks"}
          </Route>
          <Route path="/mycloset">
            {user ? <MyCloset user={user} hangersInCloset={hangersInCloset} onAddOutfit={onAddOutfit} setHangersInCloset={setHangersInCloset} onUpdateOutfitInCloset={handleUpdateOutfitInCloset} /> : <Home />}
          </Route>
        </Switch>
        </header>
        </div>
          
  );
}


