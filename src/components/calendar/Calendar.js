
import { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import { firstDates, next, prev, today } from "./calendarFn";
import calcHours from "./calcHours";
import './Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

function Calendar(props) {

    let rightArrow = <FontAwesomeIcon icon={faChevronCircleRight} />;
    let leftArrow = <FontAwesomeIcon icon={faChevronCircleLeft} />;

    console.log(props);

    const [dayOne, setDayOne] = useState('');
    const [dayTwo, setDayTwo] = useState('');
    const [dayThree, setDayThree] = useState('');

    const [dateOne, setDateOne] = useState('');
    const [dateTwo, setDateTwo] = useState('');
    const [dateThree, setDateThree] = useState('');

    const [hours, setHours] = useState([]);
    const [hoursSec, setHoursSec] = useState([]);
    const [hoursThr, setHoursThr] = useState([]);
    const [btnBack,setBtnBack] = useState(false);


    const nextDate = () => {


        const { dateText, dateThree, dateTwo, dayOne, dayThree, dayTwo } = next();
        
        if(dateText !== today) {
            setBtnBack(true);
        }

        setDayOne(dayOne);
        setDayTwo(dayTwo);
        setDayThree(dayThree);

        setDateOne(dateText);
        setDateTwo(dateTwo);
        setDateThree(dateThree);
        setHours([]);
        setHoursSec([]);
        setHoursThr([]);

        const compareDate = props.oneDoc.workDates[0].date;
        const hour = props.oneDoc.workHours[0].hours;

        const hoursCalc = calcHours(dateText, dateTwo, dateThree);


        if (compareDate.includes(hoursCalc.newData)) {
            setHours(hour)
        }
        if (compareDate.includes(hoursCalc.newData1)) {
            setHoursSec(hour)
        }
        if (compareDate.includes(hoursCalc.newData2)) {
            setHoursThr(hour)
        }


    };

    const prevDate = () => {

        const { dateText, dateThree, dateTwo, dayOne, dayThree, dayTwo } = prev();
        
        if(dateText === today) {
            setBtnBack(false)
        }
        
        setDayOne(dayOne);
        setDayTwo(dayTwo);
        setDayThree(dayThree);

        setDateOne(dateText);
        setDateTwo(dateTwo);
        setDateThree(dateThree);
        setHours([]);
        setHoursSec([]);
        setHoursThr([]);


        const compareDate = props.oneDoc.workDates[0].date;
        const hour = props.oneDoc.workHours[0].hours;

        const hoursCalc = calcHours(dateText, dateTwo, dateThree);


        if (compareDate.includes(hoursCalc.newData)) {
            setHours(hour)
        }
        if (compareDate.includes(hoursCalc.newData1)) {
            setHoursSec(hour)
        }
        if (compareDate.includes(hoursCalc.newData2)) {
            setHoursThr(hour)
        }
    };

  

    useEffect(() => {

        let { dayOne, dateText, dayTwo, dateTwo, dayThree, dateThree } = firstDates.days;

        setDayOne(dayOne);
        setDayTwo(dayTwo);
        setDayThree(dayThree);

        setDateOne(dateText);
        setDateTwo(dateTwo);
        setDateThree(dateThree);
    }, []);

    return (
        <>
            <div className="wrapp_calendar-saveTime" id="saveTime-cal">
                <div className="dateOne_calendar">
                    <h4>{dayOne}</h4>
                    <h4>{dateOne}</h4>
                    <div className="hours_calendar">
                        {hours.map((el, index) =>
                            <Link to={`/login/make-appointment/${el}`} key={index}>{el}</Link>
                        )}
                    </div>
                </div>
                <div className="dateTwo_calendar">
                    <h4>{dayTwo}</h4>
                    <h4>{dateTwo}</h4>
                    <div className="hours_calendar">
                        {hoursSec.map((el, index) =>
                            <Link to={`/login/make-appointment/${el}`} key={index + 1}>{el}</Link>
                        )}
                    </div>
                </div>
                <div className="dateThree_calendar">
                    <h4>{dayThree}</h4>
                    <h4>{dateThree}</h4>
                    <div className="hours_calendar">
                        {hoursThr.map((el, index) =>
                            <Link to={`/login/make-appointment/${el}`} key={index + 2}>{el}</Link>
                        )}
                    </div>
                </div>

            </div>
            <div className="btn_calendar">
               {btnBack  ? <span className="btn_next-date" onClick={() => prevDate()}>{leftArrow}</span> : <span></span> }
                <span className="btn_prev-date" onClick={() => nextDate()}>{rightArrow}</span>
            </div>
        </>
    );

}

export default Calendar;