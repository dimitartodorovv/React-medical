import React, { useEffect, useState } from "react"

const PatientContext = React.createContext();

function UserInfo(props) {
  
    const [patientInfo,setPatientInf] = useState({})

    const user = JSON.parse(localStorage.getItem("logedUser"));
    
    useEffect(() => {
        setPatientInf({...user})
    },[])

    return (
        <PatientContext.Provider value={[patientInfo,setPatientInf]}>
            {props.children}
        </PatientContext.Provider>
    );

}

export {
    UserInfo,
    PatientContext
}