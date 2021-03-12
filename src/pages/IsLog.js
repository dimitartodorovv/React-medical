

import NewHome from "../components/loggedUser/newHome/HomeLog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function IsLog(props) {

    console.log(props,"LOGIN");
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <NewHome />
                </Route>
            </Switch>
        </Router>
    );

}

export default IsLog;