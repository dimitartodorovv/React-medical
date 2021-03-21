import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

function Footer() {

    let twitter = <FontAwesomeIcon icon={faTwitter} />;
    let facebook = <FontAwesomeIcon icon={faFacebook} />

    const linkTwitter = (e) => {
        e.preventDefault(); 
        window.open("https://www.twitter.com")
    };
    const linkFacebook = (e) => {
        e.preventDefault(); 
        window.open("https://www.facebook.com")
    };

    return (
        <footer className="wrapper_footer">
            <div className="doc_footer">
                <p><b>For Doctors</b></p>
                <span>Why Superdoc?</span>
                <span>Online bookig</span>

            </div>
            <div className="patient_footer">
                <p><b>For Patients</b></p>
                <span>Find doctor</span>
                <span>Send case</span>
                <span>How doctor can help</span>
            </div>
            <div className="comp_footer">
                &copy; Happy Healthy 2021
               <Link className="twitter_com" to="route" target="_blank" onClick={(e) => {linkTwitter(e)}}>{twitter}</Link>  
               <Link className="facebook_com" to="route" target="_blank" onClick={(e) => {linkFacebook(e)}}>{facebook} </Link> 
            </div>
        </footer>
    );
}

export default Footer;