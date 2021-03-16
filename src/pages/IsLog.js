

import NewHome from "../components/loggedUser/newHome/HomeLog";
import Navigation from "../components/loggedUser/navBar/Navigation";
import Profile from "../components/loggedUser/profile/Profile";
import React, {useContext} from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ApplicationContext = React.createContext();

function IsLoged(props) {

    console.log(props,"LOGIN");
    return (
        <Router>  
            <Navigation />
            <Switch>
                <ApplicationContext.Provider value="I AM HERE">
                <Route exact path="/login">
                    <NewHome />
                </Route>
                <Route  path="/login/profile">
                        <Profile handleLogin={props} />
                </Route>
                </ApplicationContext.Provider>
            </Switch>
        </Router>
    );

}

export {IsLoged, ApplicationContext};