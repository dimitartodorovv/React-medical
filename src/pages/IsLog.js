

import NewHome from "../components/loggedUser/newHome/HomeLog";
import Navigation from "../components/loggedUser/navBar/Navigation";
import Profile from "../components/loggedUser/profile/Profile";
import SaveTime from "../components/loggedUser/savetime/SaveTime";
import SearchSpec from "../components/loggedUser/findDoctor/findWithSpecialty/FindWithSpecialty";
import ErrorPage from "../components/ErrorPage";
import EditProfile from "../components/loggedUser/profile/EditProfile";
import MakeAppointment from "../components/loggedUser/makeAppointment/MakeAppointment";
import Reminder from "../components/loggedUser/reminder/Reminder";
import { UserInfo } from "../components/pationtContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function IsLoged(props) {
    

    return (
        <Router>  
            <Navigation />
            <Switch>
                <UserInfo>
                <Route exact path="/login">
                    <NewHome />
                </Route>
                <Route exact path="/login/profile">
                        <Profile handleLogin={props} />
                </Route>
                <Route path="/login/find-doctor">
                    <SearchSpec />
                </Route>
                <Route  path="/login/save-time/:userID">
                    <SaveTime /> 
                </Route>
                <Route path="/login/profile/edit">
                    <EditProfile />
                </Route>
                <Route exact path="/login/make-appointment/:hours/:date">
                    <MakeAppointment />
                </Route>
                <Route path="/login/reminder">
                    <Reminder />
                </Route>
                </UserInfo>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    );

}

export {
    IsLoged
};