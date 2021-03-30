
import { useEffect, useState, useContext } from "react";
import imgDocAvatar from "../../../img/doctor-character-background_1270-84.jpg";
import MapContainer from "../../../googleMap/GoogleMap";
import { PatientContext } from "../../pationtContext"

function Information(props) {

    
    const [location,setLocation] = useState('');
    const [,setPatientInfo] = useContext(PatientContext);

    useEffect(() => {
       
        let infoDoc = {
            name: props.oneDoc.name,
            specialty: props.oneDoc.specialty,
            id: props.oneDoc._id
        }

       
        
        setPatientInfo(prevInfo => { 
            let newObj = Object.assign(prevInfo,{docInfo: infoDoc});
            return newObj
        });
           
            if(props.oneDoc.location) {
                const coordinate = {
                    lat: Number(props.oneDoc.location.lat),
                    lng: Number(props.oneDoc.location.lng)
                }    
                   setLocation(coordinate);
            }
    

    }, [setPatientInfo,props])

    return (
        <>
            <div className="up_inf-doc">
                <img className="profile_doctor-img" src={imgDocAvatar} alt="img_docotor" />
                <div className="wrap_docProf">
                    <h1 className="name_doctor">{props.oneDoc.name}</h1>
                    <h3 className="spec_doctor">{props.oneDoc.specialty}</h3>
                    <h3 className="exp_doctor">{props.oneDoc.working} - {props.oneDoc.expirience} years of experience</h3>
                    <a className="btn_save-time" href="#saveTime-cal">make an appointment</a>
                </div>
                <div className="google-map-loc">
                    <MapContainer loc={location} />
                </div>
            </div>
            <div className="education_doc">
                <h2>Education</h2>
                <p>{props.oneDoc.education}</p>
            </div>
        </>
    );

}

export default Information;