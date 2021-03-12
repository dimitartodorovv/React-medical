import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {useState} from "react";

import IsGuest from "./pages/IsGuest";
import IsLoged from "./pages/IsLog";
 

function App() {

   const [loged,setLoged] = useState(localStorage.getItem("logedUser") || false);

//    const checkForLogedUser = localStorage.getItem("logedUser")
    
//    if(checkForLogedUser) {
//        setLoged(true)
//    }

  const handleLogin = (loged) => {
        setLoged({loged})
  }
  console.log(loged);
    return (
        
        <Router>
           <Switch>
           {/* <Route  path="/"  render={() => <IsGuest handleLoged={handleLogin}/>} /> */}
           {loged ? <Route path="/login" render={() => <IsLoged isLoged={handleLogin}/>}/> :  <Route  path="/"  render={() => <IsGuest handleLoged={handleLogin}/>} />}

           </Switch>
        </Router>
    );  

    //  {loged ? <Route  path="/home" isLoged={handleLogin} render={() => <IsLoged />}/> :  <Route  path="/" handleLoged={handleLogin} render={() => <IsGuest />} />} 
  
}

export default App;
