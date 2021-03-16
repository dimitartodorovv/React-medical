
import "./Homelog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faEnvelope,  faSearch, faCommentAlt, faCalendarAlt, faBrain,faHeartbeat,faAllergies,faLeaf,faEye,faBaby,faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {useContext} from "react"
import {ApplicationContext} from "../../../pages/IsLog";
function NewHome() {
   
    let favDoc = <FontAwesomeIcon icon={faAddressBook}/>;
    let info = <FontAwesomeIcon icon={faEnvelope}/>;
    let searchDoc = <FontAwesomeIcon icon={ faSearch}/> 
    let commentIcon = <FontAwesomeIcon icon={faCommentAlt} />;
    let calendar = <FontAwesomeIcon icon={faCalendarAlt} />;
    let brain = <FontAwesomeIcon icon={faBrain} />;
    let heartBeat = <FontAwesomeIcon icon={faHeartbeat} />;
    let alergies = <FontAwesomeIcon icon={faAllergies} />;
    let leaf = <FontAwesomeIcon icon={faLeaf} />;
    let eyes = <FontAwesomeIcon icon={faEye} />;
    let baby = <FontAwesomeIcon icon={faBaby} />;
    let ears = <FontAwesomeIcon icon={faAssistiveListeningSystems} />;

    const data = useContext(ApplicationContext);
    console.log(data);

    return (

        <>      
        <header className="header-login">
            <div className="left_icon-login">
                <Link>{favDoc}</Link>
            </div>
            <div className="title-login">
                <h1>Find doctor</h1>
            </div>
            <div className="right_icon-login">
                <Link>{info}<span className="badge">2</span></Link>
            </div>
        </header>

        <main className="wrap_main-login">
            <div className="frame-login">
                <div className="top_side-login">
                    <div className="find_doctor-log">
                        <Link to="/login/find-doctor">{searchDoc}<p>Find doctor</p></Link>
                                                 
                    </div>
                    <div className="send_case-log">
                       <Link to="/login/send-case"> {commentIcon}  <p>Send case</p></Link>
                       
                    </div>
                    <div className="book_app-log">
                        <Link to="/login/calendar">{calendar} <p>Book appointment</p></Link>
                       
                    </div>
                </div>
                <div className="down_side-login">
                    <h3>Most popular specialties</h3>
                    <ul className="section_doc-log">
                    <li> {alergies}<Link to="/login/find-doctor/dermatology">Dermatology</Link></li>
                      <li> {heartBeat}  <Link>Cardiology</Link>  </li>
                       <li> {leaf} <Link>Homeopathy</Link> </li>
                        <li> {brain} <Link>Neurology</Link></li>                    
                        <li>   {ears}     <Link>ENT</Link></li>
                       <li> {baby} <Link>Pediatrics</Link> </li>
                      <li> {eyes} <Link>Ophthalmology</Link>  </li>
                    </ul>
                </div>
            </div>
        </main>
        </>
    );
}

export default NewHome;