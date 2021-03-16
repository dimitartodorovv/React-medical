import {Link, NavLink} from "react-router-dom";
import "./Navigation.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCommentAlt, faClipboard, faClock, faUserAlt} from '@fortawesome/free-solid-svg-icons';


   
   

function Navigation() {

    let commentIcon = <FontAwesomeIcon icon={faCommentAlt} />;
    let clibBorad = <FontAwesomeIcon icon={faClipboard} />;
    let clock = <FontAwesomeIcon icon={faClock}/> ;
    let profile = <FontAwesomeIcon icon={faUserAlt}/> ;


        return (
            <div className="nav_left">
                <ul className="nav_left-nested">
                    <li>  <NavLink exact activeClassName="active" to="/login"> {commentIcon} Ask a doctor</NavLink> </li>
                    <li> <NavLink activeClassName="active" to="/login/conditions"> {clibBorad} Conditions</NavLink></li>
                    <li>  <NavLink activeClassName="active" to="/login/reminder"> {clock}  Reminder</NavLink></li>
                    <li> <NavLink  activeClassName="active" to="/login/profile">{profile}  Profile</NavLink></li>

                </ul>

               
            </div>
        );
}

export default Navigation;