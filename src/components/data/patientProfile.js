import {URL,END_POINT} from '../../config/configVar';

function sendSettings(data, id) {

    const result = fetch(`${URL}${END_POINT.EDIT_PROFILE}/${id}`,{
        headers: {"Content-Type": "application/json"},
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => {return data})
        .catch(err => {return err})

       return result 
}


export {
    sendSettings,
}