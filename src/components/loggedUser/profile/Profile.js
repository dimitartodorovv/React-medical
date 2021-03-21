
import { withRouter, Link } from "react-router-dom";
import { signOut } from "../../data/dataAuth";
import "./Profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faFlask, faFileAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import imageAvatar from "../../../img/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582-removebg-preview.png";
import { useState } from "react";

function Profile({ history, handleLogin }) {

    let cog = <FontAwesomeIcon icon={faCog} />;
    let flask = <FontAwesomeIcon icon={faFlask} />;
    let file = <FontAwesomeIcon icon={faFileAlt} />;
    let histories = <FontAwesomeIcon icon={faHistory} />;

 


    const [name, setName] = useState("Not set");
    const [date, setDate] = useState("Not set");
    const [gender, setGender] = useState("Not set");
    const [height, setHeight] = useState("Not set");
    const [eyeColor,setEyeColor] = useState("Not set");
    const [bloodType, setBloodType] = useState("Not set");
    const [hairColor, setHairColor] = useState("Not set");





    const logoutApp = () => {

        handleLogin.isLoged(false);
        localStorage.removeItem("logedUser")
        signOut().then(data => {
            
            if(data.error) {
                console.log(data.error);
            }
            history.push('/login')
        })
    }

    return (
        <>
            <header className="header-login">
                <div className="left_icon-login">
                    <Link>{cog}</Link>
                </div>
                <div className="title-login">
                    <h1>Profile</h1>
                </div>
                <div className="right_icon-profile">
                    <Link to="/login/profile/edit"><div className="btn_setting">Edit</div></Link>
                </div>
            </header>

            <main className="wrap_main-login">
                <div className="frame-login">
                    <div className="top_side-login">
                        <div className="prof_user-profile">
                            <img className="img-avatar-prof" src={imageAvatar} alt="avatar"/>
                            <h3>{name}</h3>
                        </div>
                    </div>
                    <div className="down_side-profile">
                        <div className="inf_profile">
                            <Link>{flask}   <p>Lab result</p></Link>
                          
                        </div>
                        <div className="inf_profile">
                            <Link>{file}  <p>Images and document</p></Link>
                           
                        </div>
                        <div className="inf_profile">
                            <Link>{histories}  <p>History</p></Link>
                           
                        </div>
                    </div>
                    <div className="personal_field">
                        <div  className="pers_field-prof" >
                            <p>Date of birth</p>
                            <h4>{date}</h4>
                        </div>
                        <div className="pers_field-prof">
                            <p>Gender</p>
                            <h4>{gender}</h4>
                        </div>
                        <div className="pers_field-prof">
                            <p>Height</p>
                            <h4>{height}</h4>
                        </div>
                        <div className="pers_field-prof">
                            <p>Blood type</p>
                            <h4>{bloodType}</h4>
                        </div>
                        <div className="pers_field-prof">
                            <p>Eye color</p>
                            <h4>{eyeColor}</h4>
                        </div>
                        <div className="pers_field-prof">
                            <p>Hair color</p>
                            <h4>{hairColor}</h4>
                        </div>

                    </div>
                    <button className="logout-user" onClick={() => { logoutApp() }}>Log out</button>
                </div>
            </main>

        </>
    );
}

export default withRouter(Profile);