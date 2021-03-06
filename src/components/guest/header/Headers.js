import  { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import imgMed from "../../../img/png-clipart-staff-of-hermes-caduceus-as-a-symbol-of-medicine-physician-cancer-astrology-miscellaneous-text-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


function Header() {

    const [showButton, setShowButton] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [arrow, setArrow] = useState(false);
    const [pageDoctor, setPageDoctor] = useState(false);

    let arrowDown = <FontAwesomeIcon icon={faChevronDown} />;
    let arrowUp = <FontAwesomeIcon icon={faChevronUp} />;

    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            setShowButton(true);

        } else {
            setShowButton(false)
        }
    };
    
    const changePatiant = () => {
        setPageDoctor(true);       
    };  

    const changeDoctor = () => {
        setPageDoctor(false)
    };

    const optionClient = () => {
        
        if (showMenu === false) {
            setShowMenu(true);
            setArrow(true);
        } else {
            setShowMenu(false);
            setArrow(false);
        }
    }

    

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
       
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={"header_comp"} >
               
                <div className="logo_logoName">
                    <img className="logo" src={imgMed} alt="med" />                  
                    <h2 className="logo_name" >
                       <Link to="/">SUPERDOC</Link> 
                    </h2>
                </div>

                <div  className={"menu_header"}>
                    <ul className={"opt_menu"}>
                        <li onClick={() => { optionClient() }}> {pageDoctor ? "For Doctors" : "For Patients"} {arrow ? arrowUp : arrowDown}</li>
                        <li> 
                           {pageDoctor ? null : <Link to="/find-doctor">Find doctor</Link>}
                        </li>
                        <li> 
                            {pageDoctor ? <Link to="/online-booking">Online booking</Link> : <Link to="/send-case">Send case</Link>}
                        </li>
                        <li> 
                            {pageDoctor ? <Link to="/blog">Blog</Link> : <Link to="/overview">Who are we?</Link>}
                        </li>
                    </ul>
                </div>
                
            {pageDoctor ? null : <Link className="btn_consult" to="/register">Make an appointment</Link>}
                
            </header>

            {showMenu && <NavChoise buttonPatiant={changePatiant} buttonDoctor= {changeDoctor} />}

            <div className={showButton ? "btn_show" : "btn_hide"}>
                 {pageDoctor ? null : <Link className="btn_consult" to="/register">Make an appointment</Link>}
            </div>

        </>
    );

};

const NavChoise = (props) => {
        

    return (
        <nav className="all_categories_change">
            <div  className="categories">
                <Link to="/doctors" onClick={() => { props.buttonPatiant()}} className="doctors_opt"> 
                    <span>For</span>
                    <h2>Doctors</h2>
                    <p>Make online consultations to patients</p>
                </Link>
                <Link to="/patiants" onClick={() => { props.buttonDoctor()}} className="patiants_opt" >  
                    <span>For</span>
                    <h2>Patiants</h2>
                    <p>Find the right doctor and get medical advice anywhere, anytime</p>
                </Link>
            </div>
        </nav>
    );

}

export default Header;