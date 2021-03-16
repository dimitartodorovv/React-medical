import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import {useState} from "react";

import IsGuest from "./pages/IsGuest";
import {IsLoged} from "./pages/IsLog";
 

function App() {

   const isTrue = localStorage.getItem("logedUser");

   const [loged,setLoged] = useState( isTrue || false);

  const handleLogin = (loged) => {
        setLoged(loged)

  }
console.log(loged);
    return (
        
        <Router>
           <Switch>
            {loged ? <Redirect exact from="/" to="/login" /> : null}   
           {loged ? <Route  path="/login" render={() => <IsLoged isLoged={handleLogin}/>}/> :  <Route  path="/"  render={() => <IsGuest handleLoged={handleLogin}/>} />}
           </Switch>
        </Router>
    );  
  
}

export default App;
