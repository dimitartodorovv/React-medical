// import {Link} from "react-router-dom";
import imgOverview from "../../img/pngtree-2d-smiling-cartoon-character-illustration-design-png-image_506122903-removebg-preview.png";
import imgPercentage from "../../img/images-removebg-preview.png";

function Overview() {
    return (
        <div className="wrapp_overview">
        <div className="up_side-overview">
            <h1 className="overview_title">Expert medical help. Wherever you are.</h1>
            <p>Skip the waiting room and speak with top doctors online wherever you are, using the Healee telehealth app</p>
            {/* PUT LINK  */}
            <div className="btn_show" >
                <button className="btn_consult">Start Consultation</button>
            </div>
        </div>
        <img className="exa_doc" src={imgOverview} alt="medical-examination" />
        <img className="record_doc" src={imgPercentage} alt="medical-record"/>
        <div className="down_side-overview">
            <h4>Is not need to take your document with you when you visit your doctor. We have all your medical records and save time for your doctor to get acquainted with the documents before your review time.Also you have access to them the whole time. </h4>
        </div>
    </div>
    );
};

export default Overview;