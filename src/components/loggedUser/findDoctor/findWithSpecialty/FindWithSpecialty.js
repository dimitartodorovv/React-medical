
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchDoc from "../../../guest/reUseCom/SearchDoc";
import filterDoc from "../../../service/filterDoc";
import { URL, END_POINT, LIMIT_PAGE } from "../../../../config/configVar";
import SearchNotFound from "../../../guest/reUseCom/SearchNotFound";
import SearchAreaDoc from "../../../guest/reUseCom/SearchAreaDoc";
import usePaginations from "../../pagination/pagination";
import { getData } from "../../../data/dataAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './FindWithSpecialty.css';



function Specialty() {

    const path = useLocation();
    const [,,,pathChecker] = path.pathname.split("/");
  
    const rightArrow = <FontAwesomeIcon icon={faChevronCircleRight} />;
    const leftArrow = <FontAwesomeIcon icon={faChevronCircleLeft} />;


    const [filtData, setFiltData] = useState([]);
    const [checkData, setCheckData] = useState(false);
    const [, setError] = useState("");

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
            if (!newData) {
                setCheckData(false);
                return
            }
            setCheckData(true);
            setFiltData(oldData => oldData = newData)

        }
    }

    const { next, prev, currentData, currentPage, maxPage } = usePaginations(filtData, LIMIT_PAGE);

    const dataPag = currentData();

    const nextPage = () => {
        next();
    }

    const prevPage = () => {
        prev();
    }
    

console.log(pathChecker);
    useEffect(() => {


        console.log(1);
        getData(`${URL}${END_POINT.DOCTORS}`).then(data => {

            if (data.error) {
                setError(data.error);
            }
        
            switch (pathChecker) {
                case "dermatology":
                case "cardiology":
                case "homeopathy":
                case "neurology":
                case "ent":
                case "pediatrics":
                case "opthalmology":
                    let newData = filterDoc(pathChecker, null, data);

                    if (!newData) {
                        setFiltData(data.data);
                        setCheckData(false);
                        return
                    }
                    setFiltData(oldData => oldData = newData);
                    setCheckData(true);
                    break;
            
                default:
                    setFiltData(data.data);
                    setCheckData(true)
                    break;
            }
        }).catch(err => {
            setError(err);
        })

    }, [pathChecker])



    return (
        <div style={{ marginLeft: "260px" }}>
            <div className="wrapp_srch">
                <SearchAreaDoc handleChoiceSpecialty={handleChoiceSpecialty} handleChoiceCity={handleChoiceCity} />
                <button className="btn_slc-find" onClick={() => handleChoice()}>Search</button>
            </div>
            {checkData ? <SearchDoc docData={dataPag} /> : <SearchNotFound />}
            <div className="page_pagination">
                <button className="btn_pagination" onClick={() => prevPage()}>{leftArrow}</button>
                <div className="pages_doc">
                    <span>{currentPage}</span>/
                    <span>{maxPage}</span>
                </div>
                <button className="btn_pagination" onClick={() => nextPage()}>{rightArrow}</button>

            </div>
        </div>
    );

}

export default Specialty;