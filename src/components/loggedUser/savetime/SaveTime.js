import {useState,useEffect} from "react";
import {useLocation} from "react-router-dom";
import Calendar from "../../calendar/Calendar";
import Information from "../savetime/Information";

import {URL,END_POINT} from "../../../config/configVar";

import './SaveTime.css';

function SaveTime() {

   

    const direction = useLocation();
    const path = direction.pathname.split("/");
    const [oneDoc,setAOneDoc] = useState([]);
    
    const pathTodoc = `${URL}${END_POINT.SEARCHDOCTORS}/${path[3]}`;
        
    console.log(oneDoc);

    useEffect(() => {
    
        fetch(pathTodoc, {
            headers: { "Content-Type": "application/json" },
            method: `GET`,
            credentials: "include",
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setAOneDoc({...data.data})
            }).catch(err => {
                console.log(err);
            })

    }, [])



    return (
        <main className="body_inf-doc">
          
            <div className="inf_doctor-save">
              <Information oneDoc={oneDoc} />
              </div>
                <div className="save_time-doctor">
                <Calendar oneDoc={oneDoc}/>
                </div>
           
        </main>
    );
}


export default SaveTime;