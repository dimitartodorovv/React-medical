
import imgDocAvatar from "../../../img/doctor-character-background_1270-84.jpg";
import { PatientContext } from "../../pationtContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./SearchDoc.css";

function LoadDocFromData(props) {
    
    const [patientInfo] = useContext(PatientContext);

  
    return (
        props.docData.map(doctor =>
                
            <div className="find_doc-spec" key={doctor._id}>
                <div className="right-side-spec">
                    <img src={imgDocAvatar} alt="avatar" />
                </div>
            
                <div className="left-side-spec">
                    <h1>{doctor.name}</h1>
                    <h3>{doctor.specialty} - {doctor.working}</h3>
                   {patientInfo ?  <Link  className="find_btn-spec" to={`/login/save-time/${doctor._id}`}>make an appointment</Link> : <p className="reg-title">need registration if you want save time</p>}            
                </div>

            </div>
        )
    );
}

export default LoadDocFromData;