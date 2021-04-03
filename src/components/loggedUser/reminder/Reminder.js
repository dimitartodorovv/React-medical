import { useEffect, useState, useContext } from "react";
import { PatientContext } from "../../pationtContext";
import "./Reminder.css";
import { getData } from "../../data/dataAction";
import { URL, END_POINT } from "../../../config/configVar";

function Reminder() {

    const [appoint, setAppoitnt] = useState({});
    const [showField,setShowField] = useState(true);
    const [patientInfo] = useContext(PatientContext);
    
    useEffect(() => {
        
        getData(`${URL}${END_POINT.APPOINTMENT}/${patientInfo.id}`)
            .then(data => {
                if(data == null ) {
                    return
                }
                if (data.error) {
                 
                    setShowField(false);
                   
                    return
                }
                setShowField(true)
                setAppoitnt(data)
            })
    }, [patientInfo.id])

    return (
        <div className="wrap">
            <h1 className="title_card">Reminder</h1>
            {showField ? <FieldInf info={appoint} /> : <EmptyInfo />}
        </div>
    );
}


const FieldInf = (props) => {

    return (
        <div className="task">
            <div className="abstract">
                <h3>Time to appointment</h3>
                <p>{props.info.date} - {props.info.hour}</p>
            </div>
            <div className="details_card">
                <div className="details__inner">
                    <h2>Details:</h2>
                    <h4>Doctor:</h4>
                    <p>{props.info.doctorName}</p>
                    <h4>Specialty:</h4>
                    <p>{props.info.specialty}</p>
                    <h4>Reason to visit:</h4>
                    <p>{props.info.visit}</p>
                </div>
            </div>
        </div>
    );
};

const EmptyInfo = () => {
    return (
        <div className="task">
            <div className="abstract">
                <h3>Don't have an appointment</h3>
            </div>
        </div>
    );
};

export default Reminder;