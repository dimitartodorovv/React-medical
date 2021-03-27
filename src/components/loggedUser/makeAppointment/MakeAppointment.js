import { useState, useEffect, useContext } from "react";
import { PatientContext } from "../../pationtContext";


function MakeAppointment() {

    const [patientInfo,setPatientInfo] = useContext(PatientContext);

    console.log(patientInfo);

    return(
        <div style={{margin: "260px"}}>
           <h3>What is the reason for your visit?</h3>
           <form >
                <select onChange={(e) => {}} className="select-sector" name="visit" >
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
        </div>
    );
}

export default MakeAppointment;