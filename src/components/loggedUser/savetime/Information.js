
import { useEffect, useState } from "react";
import imgDocAvatar from "../../../img/doctor-character-background_1270-84.jpg";
import MapContainer from "../../../googleMap/GoogleMap";

function Information(props) {

    const [name, setName] = useState('');
    const [expirience, setExpirience] = useState('');
    const [working, setWorking] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [education, setEducation] = useState('');
    const [location,setLocation] = useState('');

   

    useEffect(() => {

        if (props.oneDoc.data) {
            setName(props.oneDoc.data.name);
            setExpirience(props.oneDoc.data.expirience);
            setSpecialty(props.oneDoc.data.specialty);
            setWorking(props.oneDoc.data.working);
            setEducation(props.oneDoc.data.education);
            if(props.oneDoc.data.location) {
                const makeNumbers = {
                    lat: Number(props.oneDoc.data.location.lat),
                    lng: Number(props.oneDoc.data.location.lng)
                }    
                   setLocation(makeNumbers);
       
            }
        }

    }, [props])

    return (
        <>
            <div className="up_inf-doc">
                <img className="profile_doctor-img" src={imgDocAvatar} alt="img_docotor" />
                <div className="wrap_docProf">
                    <h1 className="name_doctor">{name}</h1>
                    <h3 className="spec_doctor">{specialty}</h3>
                    <h3 className="exp_doctor">{working} - {expirience} years of experience</h3>
                    <a className="btn_save-time" href="#saveTime-cal">make an appointment</a>
                </div>
                <div className="google-map-loc">
                    <MapContainer loc={location} />
                </div>
            </div>
            <div className="education_doc">
                <h2>Education</h2>
                <p>{education}</p>
            </div>
        </>
    );

}

export default Information;