
import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
// import {ApplicationContext} from "../../../../pages/IsLog";
import SearchDoc from "../../../guest/reUseCom/SearchDoc";
import filterDoc from "../../../service/filterDoc";
import {URL,END_POINT} from "../../../../config/configVar";
import SearchNotFound from "../../../guest/reUseCom/SearchNotFound";
import SearchAreaDoc from "../../../guest/reUseCom/SearchAreaDoc";
import usePaginations from "../../pagination/pagination";
import './FindWithSpecialty.css';


function Specialty() {

    const path = useLocation();
    const pathChecker = path.pathname.split("/");

    const [filtData,setFiltData] = useState([]);
    const [checkData,setCheckData] = useState(false);
    const [error, setError] = useState("");
    
    
    
    const pathTodoc = `${URL}${END_POINT.DOCTORS}`;

    
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

            let newData = filterDoc(specialty, town, filtData)
            if(!newData) {
                setCheckData(false);   
                return 
            }
            setCheckData(true);
            setFiltData(newData)

        }
    }
    
    //   const {next, prev, jump, currentData, currentPage, maxPage} = usePaginations(filtData,3);
  
    useEffect(() => {
        
       
        fetch(`${pathTodoc}`, {
            headers: { "Content-Type": "application/json" },
            method: `GET`,
            credentials: "include",
        }).then(res => res.json())
            .then(data => {
                setFiltData(data.data);
               
                if(pathChecker.length > 3) {
                    let newData = filterDoc(pathChecker[3], null, data);
                        if(!newData) {
                            setCheckData(false);   
                            return 
                        }
                        setFiltData(newData);
                        setCheckData(true);
                    }else{
                        setCheckData(true);
                    }                       
                        
                        

            }).catch(err => {
                setError(err);
            })
        
    }, [pathTodoc,path,specialty,town])
    


    return (
        <div style={{marginLeft: "260px"}}>
            <div className="wrapp_srch">
            <SearchAreaDoc handleChoiceSpecialty={handleChoiceSpecialty} handleChoiceCity={handleChoiceCity} />
            <button className="btn_slc-find" onClick={() => handleChoice()}>Search</button>
            </div>
           {/* {filtData ? <SearchDoc docData={currentComments}/> : <SearchNotFound />}  */}

           {checkData ? <SearchDoc docData={filtData}/> : <SearchNotFound />} 
        
        </div>
    ); 

}

export default Specialty;