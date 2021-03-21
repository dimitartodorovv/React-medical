
import { monthForData } from "./calendarFn";


function calHours(dateText,dateTwo,dateThree) {

    const monthsOne = dateText.split("/");
    const changeM = monthForData[monthsOne[1]];
    const newData = `${monthsOne[0]}/${changeM}/${monthsOne[2]}`;

    const monthsTwo = dateTwo.split("/");
    const changeM1 = monthForData[monthsTwo[1]];
    const newData1 = `${monthsTwo[0]}/${changeM1}/${monthsOne[2]}`;

    const monthsThree = dateThree.split("/");
    const changeM2 = monthForData[monthsThree[1]];
    const newData2 = `${monthsThree[0]}/${changeM2}/${monthsOne[2]}`;

    return {
        newData,
        newData1,
        newData2
    }
}

export default calHours;