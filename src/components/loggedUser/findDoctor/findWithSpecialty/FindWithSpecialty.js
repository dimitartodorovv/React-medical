
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import {ApplicationContext} from "../../../../pages/IsLog";
import SearchDoc from "../../../guest/reUseCom/SearchDoc";
import filterDoc from "../../../service/filterDoc";
import { URL, END_POINT } from "../../../../config/configVar";
import SearchNotFound from "../../../guest/reUseCom/SearchNotFound";
import SearchAreaDoc from "../../../guest/reUseCom/SearchAreaDoc";
import usePaginations from "../../pagination/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './FindWithSpecialty.css';


function Specialty() {

    const path = useLocation();
    const pathChecker = path.pathname.split("/");

    let rightArrow = <FontAwesomeIcon icon={faChevronCircleRight} />;
    let leftArrow = <FontAwesomeIcon icon={faChevronCircleLeft} />;

    const [filtData, setFiltData] = useState([]);
    const [checkData, setCheckData] = useState(false);
    const [error, setError] = useState("");

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
            setFiltData(newData)

        }
    }

    const { next, prev, jump, currentData, currentPage, maxPage } = usePaginations(filtData, 3);

    const dataPag = currentData();

    const nextPage = () => {
        next();
    }

    const prevPage = () => {
        prev();
    }


    useEffect(() => {


        fetch(`${URL}${END_POINT.DOCTORS}`, {
            headers: { "Content-Type": "application/json" },
            method: `GET`,
            credentials: "include",
        }).then(res => res.json())
            .then(data => {
                setFiltData(data.data);

                if (pathChecker.length > 3) {
                  
                    let newData = filterDoc(pathChecker[3], null, data);

                    if (!newData) {
                        setCheckData(false);
                        return
                    }
                    setFiltData(newData);
                    setCheckData(true);
                } else {
                    setCheckData(true);
                }

            }).catch(err => {
                setError(err);
            })

    }, [path, specialty, town])



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