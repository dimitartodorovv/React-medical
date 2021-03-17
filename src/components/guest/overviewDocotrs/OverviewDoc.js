
import "./OverviewDoc.css";
import imgWorkOnCom from "../../../img/DOC CPU.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheckCircle, faTasks } from '@fortawesome/free-solid-svg-icons'; 

function OverviewDoc() {

    let calendar = <FontAwesomeIcon icon={faCalendarAlt} />;
    let circleCheck = <FontAwesomeIcon icon={faCheckCircle} />;
    let tasks = <FontAwesomeIcon icon={faTasks} />;


    return (

        <main className="wrap_docOverview">
            <div className="top-side_doc">
                <div className="top_left-doc">
                <h2>Save time and find new patients with Superdock</h2>
                <h4>Superdock is a platform for online bookings of medical examinations, which offers patients the opportunity to view the profiles of doctors from different specialties, to choose the right doctor at the most convenient time and place for them and to book an appointment online!</h4>
                </div>
                <div className="top_right-doc">
                <img src={imgWorkOnCom} alt="" />
                </div>
            </div>

            <div className="down_side-doc">
                {calendar}
                <h2>Online calendar</h2>
                <p>With Superdock, the hours you book on site or over the phone automatically become "busy" for online patients. </p>
            </div>
            <div  className="down_side-doc">
                {circleCheck}
                <h2>Confirmed patients</h2>
                <p>Each user is registered with a name, e-mail and telephone and can have up to 4 upcoming bookings to avoid malicious actions. </p>
            </div>
            <div  className="down_side-doc">
                {tasks}
                <h2>Preliminary information from patients</h2>
                <p>When booking an appointment, Superdock users give you preliminary information about the reason for their visit, method of payment, whether they have visited you before, as well as information about their status. </p>
            </div>
        </main>

    )
}


export default OverviewDoc;