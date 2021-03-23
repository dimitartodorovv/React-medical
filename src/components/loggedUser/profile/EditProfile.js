
import {useState, useEffect} from "react";
import {sendSettings} from "../../data/patientProfile";
import {useFetch} from "../../data/dataCustomHook";
import {URL,END_POINT} from "../../../config/configVar";
import './EditProfile.css';

function EditProfile() {


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
   
    const id = JSON.parse(localStorage.getItem("logedUser")).id;
    
    const {loading , dataBE} = useFetch(`${URL}${END_POINT.PROFILE}/${id}`);
   
    const changeUserProf = (e) =>  {

            setData({...data,[e.target.name]: e.target.value});
    };
   
    const handleSendUserProf = (e) => {
        e.preventDefault();

     
       const upData = {...data, userID: id}
     

        sendSettings(upData,id).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    };  
   
    
    useEffect(() => {
        
        if(!loading){
            setData({...dataBE.data})
        }
        

    },[loading,dataBE.data])

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