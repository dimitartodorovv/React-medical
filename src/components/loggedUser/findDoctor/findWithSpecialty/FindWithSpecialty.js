
import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
// import {ApplicationContext} from "../../../../pages/IsLog";
import SearchDoc from "../../../guest/reUseCom/SearchDoc";
import filterDoc from "../../../service/filterDoc";
import {URL,END_POINT} from "../../../../config/configVar";
import SearchNotFound from "../../../guest/reUseCom/SearchNotFound";
import { useFetch } from "../../../data/dataCustomHook";
import SearchAreaDoc from "../../../guest/reUseCom/SearchAreaDoc";
import './FindWithSpecialty.css';


function Specialty() {

    const path = useLocation();
    const [filtData,setFiltData] = useState([]);

    const pathTodoc = `${URL}${END_POINT.DOCTORS}`;

    const { dataBE } = useFetch(pathTodoc);
    
    const [specialty, setSpecialty] = useState();
    const [town, setTown] = useState();

    const handleChoiceSpecialty = (e) => {
        setSpecialty(e.target.value);
    };
    const handleChoiceCity = (e) => {
        setTown(e.target.value);
    }

    const handleChoice = () => {

        if (specialty || town) {
            let newData = filterDoc(specialty, town, dataBE)
            setFiltData(newData)

        }
    }
    
    useEffect(() => {
        
        const allpaths = path.pathname.split('/');
        let filterData = null;
    
        if(dataBE.data) {
            filterData  = filterDoc(allpaths[3], null, dataBE);
        }
        
        setFiltData(filterData)
        
    }, [dataBE,path])
    


    return (
        <div style={{marginLeft: "260px"}}>
            <div className="wrapp_srch">
            <SearchAreaDoc handleChoiceSpecialty={handleChoiceSpecialty} handleChoiceCity={handleChoiceCity} />
            <button className="btn_slc-find" onClick={() => handleChoice()}>Search</button>
            </div>
           {filtData ? <SearchDoc docData={filtData}/> : <SearchNotFound />} 
        </div>
    ); 

}

export default Specialty;