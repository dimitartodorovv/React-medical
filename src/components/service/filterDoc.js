
function filterDoc(specialty,town,data) {

    let newData = data.data;

    if (specialty) {
        newData = newData.filter(doc => doc.specialty.toLowerCase().includes(specialty.toLowerCase()));
    }
    if (town) {
        newData = newData.filter(doc => doc.working.toLowerCase().includes(town.toLowerCase()));
    }

    if(newData.length < 1) {
        return false
    }
    
    return newData
}


export default filterDoc;