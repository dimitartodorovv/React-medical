
import React, { useEffect, useState } from "react"

const PatientContext = React.createContext();

function UserInfo(props) {
  
    const [patientInfo,setPatientInfo] = useState({});

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem("logedUser"));

           
        setPatientInfo(user);

    },[])

    return (
        <PatientContext.Provider value={[patientInfo,setPatientInfo]}>
            {props.children}
        </PatientContext.Provider>
    );

}

export {
    UserInfo,
    PatientContext
}