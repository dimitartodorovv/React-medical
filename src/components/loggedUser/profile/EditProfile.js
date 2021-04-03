
import {useState, useEffect, useContext} from "react";
import { PatientContext } from "../../pationtContext";
import { useHistory } from "react-router-dom";
import { updSettings, sendSetting } from "../../data/patientProfile";
import {URL,END_POINT} from "../../../config/configVar";
import { getData } from "../../data/dataAction";
import './EditProfile.css';

function EditProfile() {


    const history = useHistory();
    const [data, setData] = useState({
         name: "",
         dateOfBirth: "",
         gender: "",
         height: "",
         eyeColor: "",
         bloodType: "",
         hairColor: "",
         userID: ""
    });
    const [watchForData,setWatchForData] = useState(true);
    const [patientInfo]= useContext(PatientContext)
      
    const changeUserProf = (e) =>  {

            setData({...data,[e.target.name]: e.target.value});
    };
   
    const handleSendUserProf = (e) => {
        e.preventDefault();
        
        const upData = {...data, userID: patientInfo.id}

        if(watchForData) {
     
            updSettings(`${URL}${END_POINT.EDIT_PROFILE}/${patientInfo.id}`,upData).then(res => {
    
                console.log(res);
                history.push('/login')
            }).catch(err => {
                console.log(err);
            })
            return
        }

        sendSetting(`${URL}${END_POINT.PROFILE}`,upData).then(res => {
            console.log(res);
            setWatchForData(true)
        }).catch(err => {
            console.log(err);
        })

      
    };  
   
    useEffect(() => {
        
      
        getData(`${URL}${END_POINT.PROFILE}/${patientInfo.id}`).then(data => {
            if(data.data == null) {
                setWatchForData(false);
                return;
            }
                setWatchForData(true);
                setData({...data.data})

            }).catch(err => {
                console.log(err);
            })


    },[patientInfo])

    return (
        <div className="user_prof-data">
            <form className="user_prof-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Ivan Vasilev" value={data.name} onChange={(e) => changeUserProf(e)} />

                <label htmlFor="birthDay">Date of birth</label>
                <input type="text" id="birthDay" name="dateOfBirth" placeholder="01/01/1991" value={data.dateOfBirth} onChange={(e) => changeUserProf(e)}/>

                <label htmlFor="gender">Gender</label>
                <input type="text" id="gender" name="gender" placeholder="male/female" value={data.gender} onChange={(e) => changeUserProf(e)}/>

                <label htmlFor="height">Height</label>
                <input type="text" id="height" name="height" placeholder="1.70" value={data.height} onChange={(e) => changeUserProf(e)}/>

                <label htmlFor="eyeColor">Eye color</label>
                <input type="text" id="eyeColor" name="eyeColor" placeholder="brown" value={data.eyeColor} onChange={(e) => changeUserProf(e)}/>

                <label htmlFor="bloodType">Blood type</label>
                <input type="text" id="bloodType" name="bloodType" placeholder="A+" value={data.bloodType} onChange={(e) => changeUserProf(e)}/>

                <label htmlFor="hairColor">Hair color</label>
                <input type="text" id="hairColor" name="hairColor" placeholder="brown" value={data.hairColor} onChange={(e) => changeUserProf(e)}/>
                 
                 <button className="btn_save-userProf" onClick={handleSendUserProf}>Save</button>
            </form>
        </div>
    );



}

export default EditProfile;