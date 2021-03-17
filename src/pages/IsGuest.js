
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/guest/header/Headers";
import Home from "../components/guest/home/Home";
import Overview from "../components/guest/overview/Overview";
import ErrorPage from "../components/ErrorPage";
import Register from "../components/guest/register/Register";
import Login from "../components/guest/login/Login";
import About from "../components/About";
import FindDoctor from "../components/guest/findDoctor/FindDoctor";
import OverviewDoc from "../components/guest/overviewDocotrs/OverviewDoc";
import Footer from "../components/guest/footer/Footer";


function IsGuest(props) {
  
    return (
        <Router>
         <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/register">
              <Register/>
            </Route>

            <Route path="/login">
              <Login handleLogin={props} />
            </Route>

            <Route path="/find-doctor">
              <FindDoctor />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/doctors">
              <OverviewDoc />
            </Route>

            <Route path="/patiants">
              <Overview />
            </Route>

            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
    
      );
  
}

export default IsGuest;