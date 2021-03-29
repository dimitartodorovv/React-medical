import { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { PatientContext } from "../../pationtContext";
import { appointmentMake } from "../../data/dataAction";
import {URL,END_POINT} from "../../../config/configVar";

function MakeAppointment() {

    const path = useLocation();
    const history = useHistory();
    const dateAppoitment = path.pathname.split('/');
    const changeFormatDate = dateAppoitment[4].replaceAll(":","/");
    const [patientInfo,setPatientInfo] = useContext(PatientContext);
    const [reasonVisit,setReasonVisit] = useState('');
   
    const handleVisitChoice = (e) => {
       e.preventDefault();
       setReasonVisit(e.target.value)
   }

   const reserveTime = () => {

        const resSendData = {
           doctorName: patientInfo.docInfo.name,
           specialty: patientInfo.docInfo.specialty,
           docID: patientInfo.docInfo.id,
           date: changeFormatDate,
           hour: dateAppoitment[3],
           patienName: patientInfo.username,
           user: patientInfo.id,
           visit: reasonVisit
        };

        
        
        appointmentMake(`${URL}${END_POINT.APPOINTMENT}`, resSendData)
            .then(data => {

                let removeHourAppoitment = {
                    docID: data.data.docID,
                    time: data.data.hour
                }

                appointmentMake(`${URL}${END_POINT.DEL_APPOINTMENT_HOUR}`, removeHourAppoitment)
                    .then(data => {

                        if(data.error) {
                            console.log(data);
                            return
                        }

                        history.push('/login');
                    })
            })
   }

    return(
        <div style={{margin: "260px"}}>
            <h4>Appoitment:</h4>
            <h3>Date: {changeFormatDate}</h3>
            <h3>Hour: {dateAppoitment[3]}</h3>
            <h4>Docotor:</h4>
            <h3>{patientInfo.docInfo.name}</h3>
            <h4>Specialty:</h4>
            <h3>{patientInfo.docInfo.specialty}</h3>
           <h4>What is the reason for your visit?</h4>
           <form >
                <select onChange={(e) => handleVisitChoice(e)} className="select-sector" name="visit" >
                    <option value="" defaultValue="selected">Choose a specialty</option>
                    <option value="primary examination">Primary examination</option>
                    <option value="secondary examination">Secondary examination</option>
                    <option value="routine medical examination">Routine medical examination</option>
                    <option value="children's consultation">Children's consultation</option>
                    <option value="mental health care">Maternal health care</option>
                    <option value="clinical patient">Clinical patient</option>
                    <option value="issuing a prescription">Issuing a prescription</option>
                    <option value="laboratory examination">Laboratory examination</option>
                    <option value="somthing else">Something else</option>
                </select>
            </form>
            <span></span>
            <button onClick={(e) => reserveTime()} className="btn_slc-find">Forward</button>
        </div>
    );
}

export default MakeAppointment;