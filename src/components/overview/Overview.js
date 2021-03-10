// import {Link} from "react-router-dom";
import "./Overview.css";
import imgSmileFace from "../../img/pngtree-2d-smiling-cartoon-character-illustration-design-png-image_506122903-removebg-preview.png";
import imgPercentage from "../../img/images-removebg-preview.png";
import imgMedicalExam from "../../img/Medical-Examination-Market-removebg-preview.png";
import imgdoctorHealth from "../../img/doctor-pic.png";
import imgDiagnosis from "../../img/diagnosis-en.1614608530407.png";

function Overview() {
    return (
        <div className="wrapp_overview">
            <div className="up_side-overview">
                <h1 className="overview_title">Expert medical help. Wherever you are.</h1>
                <p>Skip the waiting room and speak with top doctors online wherever you are, using the Happy Healthy</p>
                <div className="btn_btnCon" >
                    <button className="btn_consult">Start Consultation</button>
                </div>
            </div>
            <img className="exa_doc" src={imgMedicalExam} alt="medical-examination" />
            <div className="middle_side-overview">
                <img className="percent_rate" src={imgPercentage} alt="success-percentage" />
                <span></span>
                <p><b>96% Success rate</b><br />With Happy Healthy, you can get meaningful advice in the vast majority of cases</p>
            </div>
            <div className="mid_happy_client-overview">
                <img className="smile_face-overview" src={imgSmileFace} alt="smile-face" />
                <p><b>Happy patients</b><br />What patients say about Happy Healthy</p>
                {/* NEED TO PUT LINK FOR PEOPLE COMMENT */}
            </div>
            <img className="doc_img-overview" src={imgdoctorHealth} alt="doctor-img" />
            <div className="mid_scrl_side-overview">
                <h3>Find the right doctor</h3>
                <p>Happy Healthy is used by hundreds of doctors, with various specialties and rich expertise. Find and connect with the doctor who is right for you. You can then share symptoms, complaints, lab results and medical images, and ask for consultations.</p>
            </div>
            <div className="mid_scrl2_side-overview">
                <h3>Get timely advice from selected doctors</h3>
                <p>If you need timely medical attention, a team of approved doctors is always at your disposal, with a guaranteed response time. You can now talk to doctors within a wide range of specialties, and we will be gradually adding more.</p>
            </div>
            <div className="img_bottum-doc">
                <img className="phone_diag" src={imgDiagnosis} alt="diagnosis" />
            </div>
        </div>
    );
};

export default Overview;