import {useState,useEffect} from "react";
import {useLocation} from "react-router-dom";
import Calendar from "../../calendar/Calendar";
import Information from "../savetime/Information";
import { getData } from "../../data/dataAction"; 
import {URL,END_POINT} from "../../../config/configVar";

import './SaveTime.css';

function SaveTime() {

   

    const direction = useLocation();
    const [,,,path] = direction.pathname.split("/");
    const [oneDoc,setAOneDoc] = useState([]);
    
    
    useEffect(() => {
    
      
        getData(`${URL}${END_POINT.SEARCHDOCTORS}/${path}`).then(data => {             
                setAOneDoc(data.data)
            }).catch(err => {
                console.log(err);
            })

    }, [path])



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