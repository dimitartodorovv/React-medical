
import "./FindDoctor.css"
import superDoc from "../../../img/super-doctor-cartoon-character-superhero-doctor-with-hero-cloaks-healthcare-vector-concept-medical-concept-first-aid-182377164-removebg-preview.png";
import { useState } from "react";
import { useFetch } from "../../data/dataCustomHook";
import { URL, END_POINT } from "../../../config/configVar";
import filterDoc from "../../service/filterDoc";
import SearchNotFound from "../reUseCom/SearchNotFound";
import LoadDocFromData from "../reUseCom/SearchDoc";
import SearchAreaDoc from "../reUseCom/SearchAreaDoc";

function FindDoctor() {

    const pathTodoc = `${URL}${END_POINT.DOCTORS}`;

    const { dataBE } = useFetch(pathTodoc);

    const [specialty, setSpecialty] = useState();
    const [town, setTown] = useState();
    const [allDoctors, setAllDoctors] = useState([]);

    const handleChoiceSpecialty = (e) => {
        setSpecialty(e.target.value);
    };
    const handleChoiceCity = (e) => {
        setTown(e.target.value);
    }

    const handleChoice = () => {

        if (specialty || town) {
            let data = filterDoc(specialty, town, dataBE)
            setAllDoctors(data)

        }
    }

    return (
        <section>
            <div className="choice_sec">
                <h1 className="title_sec">Find a doctor and book an appointment online!</h1>
                <SearchAreaDoc handleChoiceSpecialty={handleChoiceSpecialty} handleChoiceCity={handleChoiceCity} />
                <img className="img_superDoc" src={superDoc} alt="super-doc" />

            </div>

            <button className="btn_slc-find" onClick={() => handleChoice()}>Search</button>

            {allDoctors === false ? <SearchNotFound /> : <LoadDocFromData docData={allDoctors} />}

        </section>
    );


}


export default FindDoctor;