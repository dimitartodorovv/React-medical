

import NewHome from "../components/loggedUser/newHome/HomeLog";
import Navigation from "../components/loggedUser/navBar/Navigation";
import Profile from "../components/loggedUser/profile/Profile";
import SaveTime from "../components/loggedUser/savetime/SaveTime";
import SearchSpec from "../components/loggedUser/findDoctor/findWithSpecialty/FindWithSpecialty";
import ErrorPage from "../components/ErrorPage";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ApplicationContext = React.createContext();

function IsLoged(props) {
    

    return (
        <Router>  
            <Navigation />
            <Switch>
                <ApplicationContext.Provider value="asdasd">
                <Route exact path="/login">
                    <NewHome />
                </Route>
                <Route  path="/login/profile">
                        <Profile handleLogin={props} />
                </Route>
                <Route path="/login/find-doctor">
                    <SearchSpec />
                </Route>
                <Route path="/login/save-time/:userID">
                    <SaveTime /> 
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
                </ApplicationContext.Provider>
            </Switch>
        </Router>
    );

}

export {IsLoged, ApplicationContext};