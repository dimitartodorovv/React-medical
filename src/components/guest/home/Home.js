import "./Home.css";
import imgDocPet from "../../../img/Medical-Examination-Market-removebg-preview.png";
import imgMedRecord from "../../../img/Medical-record-tablet-computer-G-1065782564-web-removebg-preview.png";
import {Link} from "react-router-dom";

function Home() {

    return (
        <div className="wrapp_home">
            <div className="up_side-homeP">
                <h1 className="home_title">Connecting doctors and patients together</h1>
                <span><b>Who are we?</b></span>
                <p>SUPERDOC is a telehealth platform that benefits doctors and patients through convenient and accessible virtual contact</p>
                
                <Link to="/learn-more" className="btn_learnM">Learn more</Link>
            </div>
            <img className="exa_doc" src={imgDocPet} alt="medical-examination" />
            <img className="record_doc" src={imgMedRecord} alt="medical-record"/>
            <div className="down_side-homeP">
                <h4>Is not need to take your document with you when you visit your doctor. We have all your medical records and save time for your doctor to get acquainted with the documents before your review time.Also you have access to them the whole time. </h4>
            </div>
        </div>
    )
}

export default Home;