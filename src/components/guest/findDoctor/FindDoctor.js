
import "./FindDoctor.css"
import superDoc from "../../../img/super-doctor-cartoon-character-superhero-doctor-with-hero-cloaks-healthcare-vector-concept-medical-concept-first-aid-182377164-removebg-preview.png"
import {useState} from "react";
import {useFetch} from "../../data/dataDoc"

function FindDoctor() {

    const [specialty,setSpecialty] = useState();
    const [town,setTown] = useState();

    const handleChoiceSpecialty = (e) => {
          setSpecialty(e.target.value);
    };
    const handleChoiceCity = (e) => {
        setTown(e.target.value);
    }
    const {load,data}  = useFetch();
   const handleChoice = () => {
    
     console.log(data);
        if(specialty || town) {
            console.log(specialty,town);
        }
   }

    return (
        <>
            <div className="choice_sec">
                <h1 className="title_sec">Find a doctor and book an appointment online!</h1>
                <form >
                    <select onChange={(e) => {handleChoiceSpecialty(e)}} className="select-sector" name="doctors" >
                        <option value=""  defaultValue="selected">Choose a specialty</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="neonatology">Neonatology</option>
                        <option value="neurology">Neurology</option>
                        <option value="urology">Urology</option>
                        <option value="surgery">Surgery</option>
                        <option value="ophthalmology">Ophthalmology</option>
                        <option value="hematology">Hematology</option>
                        <option value="endocrinology">Endocrinology</option>
                    </select>
                </form>
                <form >
                    <select onChange={(e) => {handleChoiceCity(e)}} className="select-sector" name="town" >
                        <option value=""  defaultValue="selected">Select a location</option>
                        <option value="sofia">Sofia</option>
                        <option value="plovdiv">Plovdiv</option>
                        <option value="pleven">Pleven</option>
                        <option value="varna">Varna</option>
                        <option value="staraZagora">Stara Zagora</option>
                        <option value="velikoTurnovo">Veliko Turnovo</option>
                        
                    </select>
                </form>
                <img className="img_superDoc" src={superDoc} alt="super-doc"/>
            </div>
          

            <button type="submit" className="btn_slc-find" onClick={() => handleChoice()}>Search</button>
            
        </>
    );


}


export default FindDoctor;