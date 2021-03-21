
import imgDocAvatar from "../../../img/doctor-character-background_1270-84.jpg";
import {Link} from "react-router-dom";
import "./SearchDoc.css";

function LoadDocFromData(props) {
   
    const logUser = JSON.parse(localStorage.getItem("logedUser"));
    
   
    return (
        props.docData.map(doctor =>
                
            <div className="find_doc-spec" key={doctor._id}>
                <div className="right-side-spec">
                    <img src={imgDocAvatar} alt="avatar" />
                </div>
            
                <div className="left-side-spec">
                    <h1>{doctor.name}</h1>
                    <h3>{doctor.specialty} - {doctor.working}</h3>
                   {logUser ?  <Link  className="find_btn-spec" to={`/login/save-time/${doctor._id}`}>save time</Link> : <p className="reg-title">need registration if you want save time</p>}            
                </div>

            </div>
        )
    );
}

export default LoadDocFromData;