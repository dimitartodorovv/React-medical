

    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth();
    let day = myDate.getDay();
    let date = myDate.getDate();

  

    let secDates = new Date();
    let thirdDate = new Date();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dates = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
        "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    
    let monthForData = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12",
    };
    //     let dayToday =  days[day];
    // let today = `${dates[date]}/${months[month]}/${year}`
    // let today = `${datesForData[date]}/${monthForData[month]}/${year}`


    myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() );
    secDates = new Date(secDates.getFullYear(), secDates.getMonth(), secDates.getDate() + 1);
    thirdDate = new Date(thirdDate.getFullYear(), thirdDate.getMonth(), thirdDate.getDate() + 2);

    year = myDate.getFullYear();
    month = myDate.getMonth();
    day = myDate.getDay();
    date = myDate.getDate();

    let  monthTwof = secDates.getMonth();
    let dayTwof = secDates.getDay();
    let dateTwof = secDates.getDate();

    let  monthThreef = thirdDate.getMonth();
    let dayThreef = thirdDate.getDay();
    let dateThreef = thirdDate.getDate();

        let dayOne = days[day];      
        let dateText =  `${dates[date]}/${months[month]}/${year}`;

        let dayTwo = days[dayTwof];
        let dateTwo = `${dates[dateTwof]}/${months[monthTwof]}/${year}`;

        let dayThree = days[dayThreef];
        let dateThree = `${dates[dateThreef]}/${months[monthThreef]}/${year}`;

    const firstDates = {
        days: {
            dayOne,
            dateText,
            dayTwo,
            dateTwo,
            dayThree,
            dateThree
        }
    }
    
    function next() {
    
        myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + 3);    
        secDates = new Date(secDates.getFullYear(), secDates.getMonth(), secDates.getDate() + 3);
        thirdDate = new Date(thirdDate.getFullYear(), thirdDate.getMonth(), thirdDate.getDate() + 3);

        year = myDate.getFullYear();
        month = myDate.getMonth();
        day = myDate.getDay();
        date = myDate.getDate();
        
         monthTwof = secDates.getMonth();
         dayTwof = secDates.getDay();
         dateTwof = secDates.getDate();

          monthThreef = thirdDate.getMonth();
         dayThreef = thirdDate.getDay();
         dateThreef = thirdDate.getDate();

         dayOne = days[day];      
         dateText =  `${dates[date]}/${months[month]}/${year}`;

         dayTwo = days[dayTwof];
         dateTwo = `${dates[dateTwof]}/${months[monthTwof]}/${year}`;

         dayThree = days[dayThreef];
         dateThree = `${dates[dateThreef]}/${months[monthThreef]}/${year}`;


        return {
            dayOne,
            dateText,
            dayTwo,
            dateTwo,
            dayThree,
            dateThree
        }


    }

    function prev() {
       
            myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() - 3);    
            secDates = new Date(secDates.getFullYear(), secDates.getMonth(), secDates.getDate() - 3);
            thirdDate = new Date(thirdDate.getFullYear(), thirdDate.getMonth(), thirdDate.getDate() - 3);
        
        year = myDate.getFullYear();
        month = myDate.getMonth();
        day = myDate.getDay();
        date = myDate.getDate();
        
       let  monthTwof = secDates.getMonth();
       let dayTwof = secDates.getDay();
       let dateTwof = secDates.getDate();

       let  monthThreef = thirdDate.getMonth();
       let dayThreef = thirdDate.getDay();
       let dateThreef = thirdDate.getDate();

        let dayOne = days[day];      
        let dateText =  `${dates[date]}/${months[month]}/${year}`;

        let dayTwo = days[dayTwof];
        let dateTwo = `${dates[dateTwof]}/${months[monthTwof]}/${year}`;

        let dayThree = days[dayThreef];
        let dateThree = `${dates[dateThreef]}/${months[monthThreef]}/${year}`;


        return {
            dayOne,
            dateText,
            dayTwo,
            dateTwo,
            dayThree,
            dateThree
        }
    }


export {
    firstDates,
    monthForData,
    next,
    prev
};