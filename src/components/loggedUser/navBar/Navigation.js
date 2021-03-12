import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    console.log("FROM LOGED LOGIN");
        return (
            <div className="nav_left">
                <Link to="/ask-doctor">Ask a doctor</Link>
                <Link to="/conditions">Conditions</Link>
                <Link to="/reminder">Reminder</Link>
                <Link to="/profile">Profile</Link>
            </div>
        );
}

export default Navigation;