import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Header from "./components/header/Headers";
import Home from "./components/home/Home";
import Overview from "./components/overview/Overview";
import ErrorPage from "./components/ErrorPage";
import Register from "./components/register/Register";
import About from "./components/About";
import Footer from "./components/footer/Footer";


function App() {

  

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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/overview">
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

export default App;
