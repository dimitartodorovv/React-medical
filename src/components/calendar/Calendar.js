
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firstDates, next, prev, today } from "./calendarFn";
import calcHours from "./calcHours";
import './Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

function Calendar(props) {

    let rightArrow = <FontAwesomeIcon icon={faChevronCircleRight} />;
    let leftArrow = <FontAwesomeIcon icon={faChevronCircleLeft} />;
   
    const [dayOne, setDayOne] = useState('');
    const [dayTwo, setDayTwo] = useState('');
    const [dayThree, setDayThree] = useState('');

    const [dateOne, setDateOne] = useState('');
    const [dateTwo, setDateTwo] = useState('');
    const [dateThree, setDateThree] = useState('');

    const [hours, setHours] = useState({
        date: "",
        hour: []
    });
    const [hoursSec, setHoursSec] = useState({
        date: "",
        hour: []
    });
    const [hoursThr, setHoursThr] = useState({
        date: "",
        hour: []
    });

    const [btnBack, setBtnBack] = useState(false);

    useEffect(() => {

        let { dayOne, dateText, dayTwo, dateTwo, dayThree, dateThree } = firstDates.days;

        setDayOne(dayOne);
        setDayTwo(dayTwo);
        setDayThree(dayThree);

        setDateOne(dateText);
        setDateTwo(dateTwo);
        setDateThree(dateThree);
       
        if (props.oneDoc.length === undefined) {

            const compareDate = props.oneDoc.workDates;
            const hour = props.oneDoc.workHours;

            const hoursCalc = calcHours(dateText, dateTwo, dateThree);


            if (compareDate.includes(hoursCalc.newData)) {
                let dateChangeFormat = hoursCalc.newData.replaceAll("/", ":");
                setHours({ hour: hour, date: dateChangeFormat })
            }
            if (compareDate.includes(hoursCalc.newData1)) {
                let dateChangeFormat = hoursCalc.newData1.replaceAll("/", ":");
                setHoursSec({ hour: hour, date: dateChangeFormat })
            }
            if (compareDate.includes(hoursCalc.newData2)) {
                let dateChangeFormat = hoursCalc.newData2.replaceAll("/", ":");
                setHoursThr({ hour: hour, date: dateChangeFormat })
            }
        }
    }, [props]);

    const nextDate = () => {


        const { dateText, dateThree, dateTwo, dayOne, dayThree, dayTwo } = next();

        if (dateText !== today) {
            setBtnBack(true);
        }

        setDayOne(dayOne);
        setDayTwo(dayTwo);
        setDayThree(dayThree);

        setDateOne(dateText);
        setDateTwo(dateTwo);
        setDateThree(dateThree);
        setHours({
            date: "",
            hour: []
        });
        setHoursSec({
            date: "",
            hour: []
        });
        setHoursThr({
            date: "",
            hour: []
        });

        const compareDate = props.oneDoc.workDates;
        const hour = props.oneDoc.workHours;

        const hoursCalc = calcHours(dateText, dateTwo, dateThree);


        if (compareDate.includes(hoursCalc.newData)) {
            let dateChangeFormat = hoursCalc.newData.replaceAll("/", ":");
            setHours({ hour: hour, date: dateChangeFormat });
        }
        if (compareDate.includes(hoursCalc.newData1)) {
            let dateChangeFormat = hoursCalc.newData1.replaceAll("/", ":");
            setHoursSec({ hour: hour, date: dateChangeFormat });
        }
        if (compareDate.includes(hoursCalc.newData2)) {
            let dateChangeFormat = hoursCalc.newData2.replaceAll("/", ":");
            setHoursThr({ hour: hour, date: dateChangeFormat });
        }


    };

    const prevDate = () => {

        const { dateText, dateThree, dateTwo, dayOne, dayThree, dayTwo } = prev();

        if (dateText === today) {
            setBtnBack(false)
        }

        setDayOne(dayOne);
        setDayTwo(dayTwo);
        setDayThree(dayThree);

        setDateOne(dateText);
        setDateTwo(dateTwo);
        setDateThree(dateThree);
        setHours({
            date: "",
            hour: []
        });
        setHoursSec({
            date: "",
            hour: []
        });
        setHoursThr({
            date: "",
            hour: []
        });


        const compareDate = props.oneDoc.workDates;
        const hour = props.oneDoc.workHours;

        const hoursCalc = calcHours(dateText, dateTwo, dateThree);


        if (compareDate.includes(hoursCalc.newData)) {
            let dateChangeFormat = hoursCalc.newData.replaceAll("/", ":");
            setHours({ hour: hour, date: dateChangeFormat })
        }
        if (compareDate.includes(hoursCalc.newData1)) {
            let dateChangeFormat = hoursCalc.newData1.replaceAll("/", ":");
            setHoursSec({ hour: hour, date: dateChangeFormat })
        }
        if (compareDate.includes(hoursCalc.newData2)) {
            let dateChangeFormat = hoursCalc.newData2.replaceAll("/", ":");
            setHoursThr({ hour: hour, date: dateChangeFormat })
        }
    };




    return (
        <>
            <div className="wrapp_calendar-saveTime" id="saveTime-cal">
                <div className="dateOne_calendar">
                    <h4>{dayOne}</h4>
                    <h4>{dateOne}</h4>
                    <div className="hours_calendar">
                        {hours.hour.map((el, index) =>

                            <Link to={`/login/make-appointment/${el}/${hours.date}`} key={index}>{el}</Link>
                        )}
                    </div>
                </div>
                <div className="dateTwo_calendar">
                    <h4>{dayTwo}</h4>
                    <h4>{dateTwo}</h4>
                    <div className="hours_calendar">
                        {hoursSec.hour.map((el, index) =>
                            <Link to={`/login/make-appointment/${el}/${hoursSec.date}`} key={index + 1}>{el}</Link>
                        )}
                    </div>
                </div>
                <div className="dateThree_calendar">
                    <h4>{dayThree}</h4>
                    <h4>{dateThree}</h4>
                    <div className="hours_calendar">
                        {hoursThr.hour.map((el, index) =>
                            <Link to={`/login/make-appointment/${el}/${hoursThr.date}`} key={index + 2}>{el}</Link>
                        )}
                    </div>
                </div>

            </div>
            <div className="btn_calendar">
                {btnBack ? <span className="btn_next-date" onClick={() => prevDate()}>{leftArrow}</span> : <span></span>}
                <span className="btn_prev-date" onClick={() => nextDate()}>{rightArrow}</span>
            </div>
        </>
    );

}

export default Calendar;